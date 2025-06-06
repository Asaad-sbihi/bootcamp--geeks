const { readFile, writeFile } = require('./fileManager');

const content = readFile('Hello World.txt');
console.log('Contenu lu :', content);

writeFile('Bye World.txt', 'Writing to the file');
console.log('Le fichier Bye World.txt a été modifié.');