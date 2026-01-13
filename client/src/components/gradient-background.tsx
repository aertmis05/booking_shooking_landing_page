import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * GradientBackground Component
 * 
 * Animated cinematic gradient background using Three.js shader
 * Simulates sunrise sky transitioning to deep ocean water
 * 
 * Colors: Light orange → Sky blue → Deep teal
 * Loop duration: 20 seconds
 * Mobile-optimized with CSS fallback if WebGL unavailable
 */

export function GradientBackground() {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene?: THREE.Scene;
    camera?: THREE.OrthographicCamera;
    renderer?: THREE.WebGLRenderer;
    animationId?: number;
  }>({});

  useEffect(() => {
    if (!mountRef.current) return;

    // Check WebGL support
    let webGLSupported = true;
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) webGLSupported = false;
    } catch (e) {
      webGLSupported = false;
    }

    if (!webGLSupported) {
      // CSS fallback will show
      return;
    }

    // Scene setup - orthographic for fullscreen plane
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    
    const renderer = new THREE.WebGLRenderer({
      alpha: false,
      antialias: false,
      powerPreference: "low-power",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Shader material for animated gradient
    const gradientMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        // Sunrise to ocean colors
        uColorTop: { value: new THREE.Color(0xffa366) }, // Light orange/peach
        uColorMid1: { value: new THREE.Color(0x87ceeb) }, // Sky blue
        uColorMid2: { value: new THREE.Color(0x4a90e2) }, // Medium blue
        uColorBottom: { value: new THREE.Color(0x1a5f7a) }, // Deep teal
      },
      vertexShader: `
        varying vec2 vUv;
        
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec2 uResolution;
        uniform vec3 uColorTop;
        uniform vec3 uColorMid1;
        uniform vec3 uColorMid2;
        uniform vec3 uColorBottom;
        
        varying vec2 vUv;
        
        // Smooth interpolation function
        float easeInOutSine(float x) {
          return -(cos(3.14159265359 * x) - 1.0) / 2.0;
        }
        
        void main() {
          // Vertical gradient position
          float y = vUv.y;
          
          // Animated wave effect (slow vertical shift)
          float wave = sin(uTime * 0.15 + y * 2.0) * 0.08;
          float animatedY = clamp(y + wave, 0.0, 1.0);
          
          // Multi-stop gradient
          vec3 color;
          
          if (animatedY < 0.3) {
            // Top section: orange to sky blue
            float t = easeInOutSine(animatedY / 0.3);
            color = mix(uColorTop, uColorMid1, t);
          } else if (animatedY < 0.6) {
            // Mid section: sky blue to medium blue
            float t = easeInOutSine((animatedY - 0.3) / 0.3);
            color = mix(uColorMid1, uColorMid2, t);
          } else {
            // Bottom section: medium blue to deep teal
            float t = easeInOutSine((animatedY - 0.6) / 0.4);
            color = mix(uColorMid2, uColorBottom, t);
          }
          
          // Add subtle atmospheric noise
          float noise = fract(sin(dot(vUv * 10.0, vec2(12.9898, 78.233))) * 43758.5453);
          color += noise * 0.015;
          
          gl_FragColor = vec4(color, 1.0);
        }
      `,
    });

    // Fullscreen plane geometry
    const planeGeometry = new THREE.PlaneGeometry(2, 2);
    const planeMesh = new THREE.Mesh(planeGeometry, gradientMaterial);
    scene.add(planeMesh);

    sceneRef.current = { scene, camera, renderer };

    // Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
      sceneRef.current.animationId = requestAnimationFrame(animate);
      
      const elapsed = clock.getElapsedTime();
      gradientMaterial.uniforms.uTime.value = elapsed;
      
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      renderer.setSize(width, height);
      gradientMaterial.uniforms.uResolution.value.set(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      
      if (sceneRef.current.animationId) {
        cancelAnimationFrame(sceneRef.current.animationId);
      }
      if (sceneRef.current.renderer && mountRef.current) {
        if (sceneRef.current.renderer.domElement.parentNode === mountRef.current) {
          mountRef.current.removeChild(sceneRef.current.renderer.domElement);
        }
        sceneRef.current.renderer.dispose();
      }
      if (sceneRef.current.scene) {
        sceneRef.current.scene.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            object.geometry?.dispose();
            if (object.material instanceof THREE.Material) {
              object.material.dispose();
            }
          }
        });
      }
    };
  }, []);

  return (
    <>
      {/* WebGL Canvas */}
      <div
        ref={mountRef}
        className="absolute inset-0 md:hidden"
        style={{ touchAction: "none" }}
      />
      
      {/* CSS Fallback - Static gradient */}
      <div 
        className="absolute inset-0 md:hidden -z-10"
        style={{
          background: "linear-gradient(to bottom, #ffa366 0%, #87ceeb 30%, #4a90e2 60%, #1a5f7a 100%)"
        }}
      />
    </>
  );
}
