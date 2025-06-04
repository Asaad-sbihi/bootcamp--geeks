const API_KEY = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const btn = document.getElementById('getGifBtn');
const gifContainer = document.getElementById('gifContainer');

btn.addEventListener('click', async () => {
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const data = await response.json();
    const imageUrl = data.data.images.original.url;

    // Affiche le GIF
    gifContainer.innerHTML = '';
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = "GIF aléatoire";
    gifContainer.appendChild(img);

  } catch (error) {
    console.error('Erreur lors de la récupération du GIF :', error);
    gifContainer.innerHTML = '<p>Impossible de charger le GIF. Réessaye plus tard.</p>';
  }
});
