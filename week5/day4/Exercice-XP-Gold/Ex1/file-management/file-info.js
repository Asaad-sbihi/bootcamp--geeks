// file-info.js
const fs = require('fs');
const path = require('path');

function afficherInfoFichier() {
  const cheminFichier = path.join(__dirname, 'data', 'example.txt');
  const existe = fs.existsSync(cheminFichier);
  console.log(`✅ Le fichier existe : ${existe}`);

  if (existe) {
    const stats = fs.statSync(cheminFichier);
    console.log(`📏 Taille du fichier : ${stats.size} octets`);
    console.log(`📅 Date de création : ${stats.birthtime}`);
  } else {
    console.log("❌ Le fichier n'existe pas.");
  }
}

module.exports = afficherInfoFichier;
