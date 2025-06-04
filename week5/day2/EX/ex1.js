const apiUrl = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      // Si la réponse n’est pas "OK", on lance une erreur
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // On transforme la réponse en objet JavaScript
    return response.json();
  })
  .then((data) => {
    // Afficher l’objet JavaScript dans la console
    console.log("Données reçues depuis l'API Giphy :", data);
  })
  .catch((error) => {
    // Attraper et afficher les erreurs potentielles
    console.error("Une erreur s'est produite :", error);
  });
