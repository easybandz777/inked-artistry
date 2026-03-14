/**
 * Remove white/cream background from logo.png — v2 with cleaner edge handling
 */
const sharp = require('sharp');
const path = require('path');

const input  = path.join(__dirname, 'public', 'images', 'logo.png');
const output = path.join(__dirname, 'public', 'images', 'logo-transparent.png');

async function removeBackground() {
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const pixels = Buffer.from(data);

  for (let i = 0; i < pixels.length; i += channels) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];

    // Detect warm cream/white background (high R, high G, high B, warm tint)
    const isBackground = r > 218 && g > 208 && b > 198 && r >= b;

    // Soft fringe zone — pixels just inside the background threshold
    const isFringe = r > 195 && g > 185 && b > 175 && r >= b && !isBackground;

    if (isBackground) {
      pixels[i + 3] = 0; // fully transparent
    } else if (isFringe) {
      // Graduated transparency based on how close to background color
      const dist = Math.min(r - 195, g - 185, b - 175);
      pixels[i + 3] = Math.round((dist / 23) * 255 * 0.8);
    }
    // else: keep pixel fully opaque
  }

  await sharp(pixels, { raw: { width, height, channels } })
    .png({ compressionLevel: 9 })
    .toFile(output);

  console.log(`✅ Done — ${width}x${height}, saved to ${output}`);
}

removeBackground().catch(err => { console.error(err); process.exit(1); });
