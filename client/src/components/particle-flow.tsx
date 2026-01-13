import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

/**
 * ParticleFlow Component
 * 
 * Mobile-optimized Three.js particle system with directional flow
 * Particles flow diagonally North-East (upward-right) symbolizing travel/movement
 * 
 * PERFORMANCE OPTIMIZATION:
 * - Only renders on mobile (≤ 480px)
 * - GPU-light: no shadows, simple geometries
 * - 60fps target for midrange devices
 * - Auto-reduces particle count if FPS drops
 * - Adaptive quality based on device performance
 * 
 * CUSTOMIZATION:
 * - Particle count: Line 97 (reduce for slower devices)
 * - Flow speed: Lines 110-112 (NE direction velocity)
 * - Line opacity: Line 151 (connection visibility)
 * - Connection distance: Line 307 (proximity threshold)
 */

export function AnimatedMobileBackground() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [webGLSupported, setWebGLSupported] = useState(true);
  const fpsRef = useRef<number[]>([]);
  const sceneRef = useRef<{
    scene?: THREE.Scene;
    camera?: THREE.PerspectiveCamera;
    renderer?: THREE.WebGLRenderer;
    particles?: THREE.Points;
    connections?: THREE.LineSegments;
    animationId?: number;
    particleCount?: number;
  }>({});

  useEffect(() => {
    // Check if mobile and WebGL supported
    const checkMobile = () => window.innerWidth <= 480;
    setIsMobile(checkMobile());

    // Test WebGL support
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setWebGLSupported(false);
    } catch (e) {
      setWebGLSupported(false);
    }

    const handleResize = () => {
      const mobile = checkMobile();
      setIsMobile(mobile);
      
      // Clean up if switching to desktop
      if (!mobile && sceneRef.current.renderer) {
        if (sceneRef.current.animationId) {
          cancelAnimationFrame(sceneRef.current.animationId);
        }
        if (mountRef.current && sceneRef.current.renderer.domElement.parentNode === mountRef.current) {
          mountRef.current.removeChild(sceneRef.current.renderer.domElement);
        }
        sceneRef.current.renderer?.dispose();
        sceneRef.current = {};
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile || !webGLSupported || !mountRef.current) return;

    // === ICON TEXTURE LOADER ===
    // CUSTOMIZATION: Add/swap icon paths here
    const iconPaths = [
      '/icons/airplane.svg',
      '/icons/backpack.svg',
      '/icons/globe.svg',
      '/icons/mountain.svg',
      '/icons/hotel.svg',
      '/icons/location.svg',
      '/icons/cruise.svg',
      '/icons/bus.svg',
      '/icons/compass.svg',
    ];

    const textureLoader = new THREE.TextureLoader();
    const iconTextures: THREE.Texture[] = [];
    
    // Load all icon textures
    iconPaths.forEach((path) => {
      const texture = textureLoader.load(
        path,
        undefined,
        undefined,
        // Fallback: use simple dot if icon fails to load
        () => console.warn(`Failed to load icon: ${path}`)
      );
      iconTextures.push(texture);
    });

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 35;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false, // Disabled for performance
      powerPreference: "low-power", // Battery optimization
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap for performance
    mountRef.current.appendChild(renderer.domElement);

    // === SPRITE-BASED PARTICLE SYSTEM WITH TRAVEL ICONS ===
    let particleCount = 300; // CUSTOMIZATION: Reduce to 200 for slower devices
    const velocities: THREE.Vector3[] = [];
    const sprites: THREE.Sprite[] = [];
    const spriteRotations: number[] = []; // Random rotation speed per sprite
    const spriteScales: number[] = []; // Random scale per sprite

    // Create individual sprites for each particle
    for (let i = 0; i < particleCount; i++) {
      // Random initial position
      const x = (Math.random() - 0.5) * 80;
      const y = (Math.random() - 0.5) * 80;
      const z = (Math.random() - 0.5) * 50 - 10;

      // DIRECTIONAL FLOW: North-East (upward + rightward) - UNCHANGED
      const baseSpeedX = 0.02 + Math.random() * 0.03; // Eastward (right)
      const baseSpeedY = 0.03 + Math.random() * 0.04; // Northward (up)
      const baseSpeedZ = (Math.random() - 0.5) * 0.01; // Slight depth variation
      velocities.push(new THREE.Vector3(baseSpeedX, baseSpeedY, baseSpeedZ));

      // Randomly select an icon texture
      const randomTexture = iconTextures[Math.floor(Math.random() * iconTextures.length)];

      // Create sprite material with random opacity (40-70%)
      const randomOpacity = 0.4 + Math.random() * 0.3;
      const spriteMaterial = new THREE.SpriteMaterial({
        map: randomTexture,
        transparent: true,
        opacity: randomOpacity,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      // Create sprite (billboarded plane that always faces camera)
      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.position.set(x, y, z);

      // Random scale variation (±10%)
      const baseScale = 1.5; // Base size for 10-20px appearance
      const scaleVariation = baseScale * (0.9 + Math.random() * 0.2);
      sprite.scale.set(scaleVariation, scaleVariation, 1);
      spriteScales.push(scaleVariation);

      // Random rotation speed for variety
      spriteRotations.push((Math.random() - 0.5) * 0.01);

      sprites.push(sprite);
      scene.add(sprite);
    }

    // Position tracking for connection lines (extract from sprites)
    const positions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3); // Dummy array for compatibility
    sprites.forEach((sprite, i) => {
      positions[i * 3] = sprite.position.x;
      positions[i * 3 + 1] = sprite.position.y;
      positions[i * 3 + 2] = sprite.position.z;
      // Set to white for line colors
      particleColors[i * 3] = 1.0;
      particleColors[i * 3 + 1] = 1.0;
      particleColors[i * 3 + 2] = 1.0;
    });

    // === CONNECTION LINES (Air Routes) ===
    const maxConnections = 150; // Limit for performance
    const linePositions = new Float32Array(maxConnections * 6); // 2 points per line
    const lineColors = new Float32Array(maxConnections * 6); // RGB per point

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute("color", new THREE.BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.25, // CUSTOMIZATION: 20-40% for text visibility
      blending: THREE.AdditiveBlending,
    });

    const connections = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(connections);

    // Subtle ambient lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    // Store references (sprites replace particles)
    sceneRef.current = { scene, camera, renderer, particles: undefined, connections, particleCount };

    // === ANIMATION LOOP WITH FPS MONITORING ===
    let frame = 0;
    let lastTime = performance.now();
    
    const animate = () => {
      sceneRef.current.animationId = requestAnimationFrame(animate);
      frame++;

      // FPS monitoring for adaptive quality
      const currentTime = performance.now();
      const delta = currentTime - lastTime;
      if (delta > 0) {
        const fps = 1000 / delta;
        fpsRef.current.push(fps);
        
        // Keep last 60 frames for average
        if (fpsRef.current.length > 60) {
          fpsRef.current.shift();
        }
        
        // Reduce particles if FPS drops below 45
        if (frame % 60 === 0) {
          const avgFps = fpsRef.current.reduce((a, b) => a + b, 0) / fpsRef.current.length;
          if (avgFps < 45 && particleCount > 150) {
            particleCount = Math.max(150, particleCount - 50);
            console.log(`Performance: Reduced particles to ${particleCount}`);
          }
        }
      }
      lastTime = currentTime;

      // Update sprite positions and rotations (NE directional flow - UNCHANGED)
      for (let i = 0; i < particleCount; i++) {
        // Apply velocity to sprite position
        sprites[i].position.x += velocities[i].x;
        sprites[i].position.y += velocities[i].y;
        sprites[i].position.z += velocities[i].z;

        // Wrap around - sprites reappear from opposite side
        if (sprites[i].position.x > 40) {
          sprites[i].position.x = -40;
        }
        if (sprites[i].position.y > 40) {
          sprites[i].position.y = -40;
        }
        if (sprites[i].position.z > 25) {
          sprites[i].position.z = -25;
        }
        if (sprites[i].position.z < -35) {
          sprites[i].position.z = -35;
        }

        // Apply gentle rotation for visual interest
        sprites[i].material.rotation += spriteRotations[i];

        // Update positions array for connection lines
        positions[i * 3] = sprites[i].position.x;
        positions[i * 3 + 1] = sprites[i].position.y;
        positions[i * 3 + 2] = sprites[i].position.z;
      }

      // Update connections every 3 frames for performance
      if (frame % 3 === 0) {
        updateConnections(
          positions,
          linePositions,
          lineColors,
          particleCount,
          particleColors
        );
        lineGeometry.attributes.position.needsUpdate = true;
        lineGeometry.attributes.color.needsUpdate = true;
      }

      // Gentle camera sway for depth perception
      camera.position.x = Math.sin(currentTime * 0.0001) * 2;
      camera.position.y = Math.cos(currentTime * 0.00015) * 1.5;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup function
    const cleanup = () => {
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
          if (object instanceof THREE.Mesh || object instanceof THREE.Points || object instanceof THREE.Sprite) {
            object.geometry?.dispose();
            if (object.material instanceof THREE.Material) {
              object.material.dispose();
            }
          }
        });
      }
      // Dispose sprites
      sprites.forEach(sprite => {
        sprite.material.dispose();
        if (sprite.material.map) {
          sprite.material.map.dispose();
        }
      });
    };

    return cleanup;
  }, [isMobile, webGLSupported]);

  // Don't render on desktop or if WebGL not supported
  if (!isMobile || !webGLSupported) {
    return null;
  }

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 md:hidden pointer-events-none"
      style={{ touchAction: "none" }}
    />
  );
}

/**
 * Update connection lines between nearby particles (sprites)
 * Creates the "air routes" effect
 * Note: particleColors parameter maintained for compatibility but uses fixed white color
 */
function updateConnections(
  positions: Float32Array,
  linePositions: Float32Array,
  lineColors: Float32Array,
  particleCount: number,
  particleColors: Float32Array
) {
  let lineIndex = 0;
  const maxDistance = 15; // CUSTOMIZATION: Connection distance threshold
  const maxLines = 50; // Limit active connections for performance

  for (let i = 0; i < particleCount && lineIndex < maxLines; i++) {
    for (let j = i + 1; j < particleCount && lineIndex < maxLines; j++) {
      const dx = positions[i * 3] - positions[j * 3];
      const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
      const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
      const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

      if (distance < maxDistance) {
        // Line start point
        linePositions[lineIndex * 6] = positions[i * 3];
        linePositions[lineIndex * 6 + 1] = positions[i * 3 + 1];
        linePositions[lineIndex * 6 + 2] = positions[i * 3 + 2];

        // Line end point
        linePositions[lineIndex * 6 + 3] = positions[j * 3];
        linePositions[lineIndex * 6 + 4] = positions[j * 3 + 1];
        linePositions[lineIndex * 6 + 5] = positions[j * 3 + 2];

        // Line color - fade based on distance (white lines for icon sprites)
        const opacity = 1 - distance / maxDistance;
        
        // Start color (white with distance-based opacity)
        lineColors[lineIndex * 6] = 1.0 * opacity;     // R
        lineColors[lineIndex * 6 + 1] = 1.0 * opacity; // G
        lineColors[lineIndex * 6 + 2] = 1.0 * opacity; // B

        // End color (white with distance-based opacity)
        lineColors[lineIndex * 6 + 3] = 1.0 * opacity;     // R
        lineColors[lineIndex * 6 + 4] = 1.0 * opacity; // G
        lineColors[lineIndex * 6 + 5] = 1.0 * opacity; // B

        lineIndex++;
      }
    }
  }

  // Clear remaining lines
  for (let i = lineIndex * 6; i < linePositions.length; i++) {
    linePositions[i] = 0;
    lineColors[i] = 0;
  }
}
