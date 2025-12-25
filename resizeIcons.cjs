const sharp = require('sharp');
const path = require('path');

const source = path.join(__dirname, 'src-tauri', 'icons', 'everyday.png');
const squareSource = path.join(__dirname, 'src-tauri', 'icons', 'everyday-square.png');

async function makeSquare() {
  const image = sharp(source);
  const metadata = await image.metadata();
  const size = Math.min(metadata.width, metadata.height);
  await image
    .resize(size, size, { fit: 'cover' })
    .png()
    .toFile(squareSource);
  console.log('Square image created');
}

makeSquare().catch(console.error);