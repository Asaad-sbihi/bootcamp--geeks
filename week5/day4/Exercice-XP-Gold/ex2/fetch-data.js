// fetch-data.js
const axios = require('axios');

async function fetchPosts() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts = response.data;

    console.log('Liste des titres des posts :');
    posts.forEach(post => {
      console.log(`- ${post.title}`);
    });
  } catch (error) {
    console.error(' Une erreur est survenue :', error.message);
  }
}

module.exports = fetchPosts;
