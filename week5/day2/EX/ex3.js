async function getStarship() {
  try {
    const response = await fetch("https://www.swapi.tech/api/starships/9/");

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const data = await response.json();
    console.log(data.result);
  } catch (error) {
    console.error("Une erreur est survenue :", error);
  }
}

getStarship();
