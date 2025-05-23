document.getElementById('MyForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche le rechargement de la page

  const radiusInput = document.getElementById('radius');
  const volumeInput = document.getElementById('volume');

  const radius = parseFloat(radiusInput.value);

  if (!isNaN(radius) && radius > 0) {
    // Formule du volume d'une sphère : V = (4/3) * π * r³
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volumeInput.value = volume.toFixed(2); // Affiche 2 décimales
  } else {
    alert('Veuillez entrer un rayon valide et positif.');
    volumeInput.value = '';
  }
});
