const form = document.getElementById("sunriseForm");
const result = document.getElementById("result");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const lat1 = document.getElementById("lat1").value.trim();
  const lng1 = document.getElementById("lng1").value.trim();
  const lat2 = document.getElementById("lat2").value.trim();
  const lng2 = document.getElementById("lng2").value.trim();

  const url1 = `https://api.sunrise-sunset.org/json?lat=${lat1}&lng=${lng1}&formatted=0`;
  const url2 = `https://api.sunrise-sunset.org/json?lat=${lat2}&lng=${lng2}&formatted=0`;

  try {
    const [response1, response2] = await Promise.all([
      fetch(url1),
      fetch(url2)
    ]);

    if (!response1.ok || !response2.ok) {
      throw new Error("One of the API calls failed");
    }

    const data1 = await response1.json();
    const data2 = await response2.json();

    const sunrise1 = new Date(data1.results.sunrise).toLocaleTimeString();
    const sunrise2 = new Date(data2.results.sunrise).toLocaleTimeString();

    result.innerHTML = `
      <p><strong>City 1 Sunrise:</strong> ${sunrise1}</p>
      <p><strong>City 2 Sunrise:</strong> ${sunrise2}</p>
    `;
  } catch (error) {
    console.error("Error fetching sunrise times:", error);
    result.innerHTML = `<p style="color:red;">Oops! Something went wrong.</p>`;
  }
});
