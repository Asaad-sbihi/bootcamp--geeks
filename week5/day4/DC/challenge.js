const greet = require('./greeting');
const showMessage = require('./colorful-message');
const showFileContent = require('./read-file');

// Greet the user
const message = greet('Asaad');
console.log(message);

// Show the colorful message
showMessage();

// Show the content of the file
showFileContent();