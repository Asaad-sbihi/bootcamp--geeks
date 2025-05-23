// Déclaration d'une variable globale
let allBoldItems;

// Fonction pour récupérer tous les éléments <strong> du paragraphe
function getBoldItems() {
  const paragraph = document.getElementById('myParagraph');
  allBoldItems = paragraph.getElementsByTagName('strong');
}

// Fonction pour changer la couleur de tous les textes en gras en bleu
function highlight() {
  for (let item of allBoldItems) {
    item.style.color = 'blue';
  }
}

// Fonction pour remettre les couleurs des textes en gras en noir
function returnItemsToDefault() {
  for (let item of allBoldItems) {
    item.style.color = 'black';
  }
}

// Exécuter la fonction pour initialiser la variable globale
getBoldItems();

// Cibler le paragraphe
const paragraph = document.getElementById('myParagraph');

// Ajouter les événements
paragraph.addEventListener('mouseover', highlight);
paragraph.addEventListener('mouseout', returnItemsToDefault);