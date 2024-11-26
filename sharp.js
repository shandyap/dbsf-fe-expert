/* eslint-disable no-undef */
/* eslint-disable no-trailing-spaces */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Folder sumber dan tujuan
const sourceFolder = path.resolve(__dirname, 'src/public/images/heros');
const outputFolder = path.resolve(__dirname, 'src/public/images/sharp');

// Buat folder output jika belum ada
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder, { recursive: true });
}

// Proses setiap gambar di folder sumber
fs.readdirSync(sourceFolder)
  .forEach((image) => {
    // Nama file tanpa ekstensi
    const imageName = image.split('.').slice(0, -1).join('.');

    // Membuat ukuran 800px (large)
    sharp(`${sourceFolder}/${image}`)
      .resize(800)
      .toFile(path.resolve(
        __dirname,
        `${outputFolder}/${imageName}-large.jpg`
      ))
      .then(() => {
        console.log(`Berhasil memproses ${imageName}-large.jpg`);
      })
      .catch((err) => {
        console.error(`Gagal memproses ${imageName}-large.jpg`, err);
      });

    // Membuat ukuran 480px (small)
    sharp(`${sourceFolder}/${image}`)
      .resize(480)
      .toFile(path.resolve(
        __dirname,
        `${outputFolder}/${imageName}-small.jpg`
      ))
      .then(() => {
        console.log(`Berhasil memproses ${imageName}-small.jpg`);
      })
      .catch((err) => {
        console.error(`Gagal memproses ${imageName}-small.jpg`, err);
      });
  });
