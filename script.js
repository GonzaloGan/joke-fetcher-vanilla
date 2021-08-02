const setupElement = document.getElementById("setup");
const deliveryElement = document.getElementById("delivery");
const buttonElement = document.getElementById("btn");
const JOKE_URL = "https://v2.jokeapi.dev/joke/Any";

buttonElement.addEventListener("click", getJoke);

async function getJoke() {
  const res = await fetch(JOKE_URL);
  const data = await res.json();

  const twoPartJoke = data.type === "twopart"
  setupElement.innerHTML = twoPartJoke ? data.setup : "";
  deliveryElement.innerHTML = twoPartJoke ? data.delivery : data.joke;
}
