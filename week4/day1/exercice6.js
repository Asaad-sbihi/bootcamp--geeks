// Self-invoking function (IIFE)
(function(children, partner, location, job) {
  const message = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
  document.getElementById("fortune").innerText = message;
})(3, "Sara", "Paris", "Web Developer");