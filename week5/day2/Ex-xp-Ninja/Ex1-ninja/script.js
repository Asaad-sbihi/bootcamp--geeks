const API_KEY = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const form = document.getElementById('gifForm');
const input = document.getElementById('searchInput');
const gifContainer = document.getElementById('gifContainer');
const deleteBtn = document.getElementById('deleteBtn');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = input.value.trim();
  if (!query) return;

  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=10`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    gifContainer.innerHTML = ''; 

    result.data.forEach(gif => {
      const img = document.createElement('img');
      img.src = gif.images.fixed_height.url;
      img.alt = gif.title;
      gifContainer.appendChild(img);
    });

  } catch (error) {
    console.error('Error fetching gifs:', error);
    gifContainer.innerHTML = '<p>Oops! Something went wrong.</p>';
  }
});

deleteBtn.addEventListener('click', () => {
  gifContainer.innerHTML = '';
});
