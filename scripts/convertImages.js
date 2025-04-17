import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Configuration
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const inputDir = path.join(__dirname, "../public/assets/images");
const outputDir = path.join(__dirname, "../public/assets/images");

// Fonction pour convertir une image en WebP
async function convertToWebP(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: 80 }) // Qualité de 80% pour un bon compromis taille/qualité
      .toFile(outputPath);
    console.log(
      `Converti: ${path.basename(inputPath)} -> ${path.basename(outputPath)}`
    );
  } catch (error) {
    console.error(`Erreur lors de la conversion de ${inputPath}:`, error);
  }
}

// Fonction principale
async function convertAllImages() {
  try {
    // Lire tous les fichiers du dossier
    const files = fs.readdirSync(inputDir);

    // Filtrer pour ne garder que les images
    const imageFiles = files.filter((file) => /\.(jpg|jpeg|png)$/i.test(file));

    // Convertir chaque image
    for (const file of imageFiles) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(
        outputDir,
        file.replace(/\.(jpg|jpeg|png)$/i, ".webp")
      );

      await convertToWebP(inputPath, outputPath);
    }

    console.log("Conversion terminée !");
  } catch (error) {
    console.error("Erreur lors de la conversion:", error);
  }
}

// Exécuter le script
convertAllImages();
