const fs = require('fs');

fs.readFile('source.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Erreur de lecture :', err);
    return;
  }

  fs.writeFile('destination.txt', data, (err) => {
    if (err) {
      console.error('Erreur d\'écriture :', err);
    } else {
      console.log(' Copie réussie vers destination.txt');
    }
  });
});
