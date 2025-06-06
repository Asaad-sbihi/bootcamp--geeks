const fs = require('fs');

fs.readdir('.', (err, files) => {
  if (err) {
    console.error('Erreur de lecture du dossier :', err);
    return;
  }

  console.log(' Fichiers présents dans ce dossier :');
  files.forEach(file => {
    console.log('📄', file);
  });
});
