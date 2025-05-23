const form = document.getElementById("libform");
const story = document.getElementById("story");
const shuffleBtn = document.getElementById("shuffle-button");

let currentWords = {};
let stories = [
  (w) => `${w.person} went to the ${w.place} to ${w.verb} with a ${w.adjective} ${w.noun}.`,
  (w) => `In a ${w.adjective} world, ${w.person} found a ${w.noun} and decided to ${w.verb} it at the ${w.place}.`,
  (w) => `Once upon a time, a ${w.noun} became ${w.person}'s best friend. They loved to ${w.verb} in ${w.place}, especially on ${w.adjective} days.`
];

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const noun = document.getElementById("noun").value.trim();
  const adjective = document.getElementById("adjective").value.trim();
  const person = document.getElementById("person").value.trim();
  const verb = document.getElementById("verb").value.trim();
  const place = document.getElementById("place").value.trim();

  if (!noun || !adjective || !person || !verb || !place) {
    alert("Please fill in all fields.");
    return;
  }

  currentWords = { noun, adjective, person, verb, place };
  const randomIndex = Math.floor(Math.random() * stories.length);
  story.textContent = stories[randomIndex](currentWords);
});

shuffleBtn.addEventListener("click", function() {
  if (Object.keys(currentWords).length === 0) {
    alert("Fill out the form first before shuffling.");
    return;
  }

  const randomIndex = Math.floor(Math.random() * stories.length);
  story.textContent = stories[randomIndex](currentWords);
});
