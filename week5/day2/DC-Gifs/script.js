const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const form = document.getElementById("gifForm");
const input = document.getElementById("searchInput");
const gifContainer = document.getElementById("gifContainer");
const deleteAllBtn = document.getElementById("deleteAllBtn");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTerm = input.value.trim();
  if (!searchTerm) return;

  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${searchTerm}`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    const imageUrl = data.data.images?.original?.url;

    if (imageUrl) {
      addGifToPage(imageUrl);
    } else {
      alert("No GIF found for this category.");
    }
  } catch (error) {
    console.error("Error fetching gif:", error);
    alert("Oops! Something went wrong.");
  }

  input.value = "";
});

function addGifToPage(url) {
  const gifDiv = document.createElement("div");
  gifDiv.style.margin = "10px 0";

  const img = document.createElement("img");
  img.src = url;
  img.alt = "Random gif";
  img.style.maxWidth = "300px";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "DELETE";
  deleteBtn.style.marginLeft = "10px";

  deleteBtn.addEventListener("click", () => {
    gifDiv.remove();
  });

  gifDiv.appendChild(img);
  gifDiv.appendChild(deleteBtn);
  gifContainer.appendChild(gifDiv);
}

deleteAllBtn.addEventListener("click", () => {
  gifContainer.innerHTML = "";
});
