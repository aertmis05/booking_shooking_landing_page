import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const testimonialsDir = path.join(__dirname, 'client', 'public', 'testimonial');

async function optimize() {
    try {
        console.log(`Scanning directory: ${testimonialsDir}`);
        const files = await fs.readdir(testimonialsDir);

        for (const file of files) {
            if (file.match(/\.(png|jpe?g)$/i)) {
                const inputPath = path.join(testimonialsDir, file);
                const outputPath = path.join(testimonialsDir, `${path.parse(file).name}.webp`);

                console.log(`Optimizing ${file}...`);

                try {
                    const info = await sharp(inputPath)
                        .resize({ width: 800, withoutEnlargement: true }) // Reasonable max width for testimonials
                        .webp({ quality: 80 })
                        .toFile(outputPath);

                    console.log(`Optimized: ${file} -> ${path.basename(outputPath)} (${info.size} bytes)`);
                } catch (err) {
                    console.error(`Error optimizing ${file}:`, err);
                }
            }
        }

    } catch (err) {
        console.error('Error in optimization process:', err);
    }
}

optimize();
