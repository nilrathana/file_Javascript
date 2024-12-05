// let count = 0;

// document.getElementById("decrease").addEventListener("click", function() {
//     count--;
//     document.getElementById("count").innerText = count;
// });

// document.getElementById("reset").addEventListener("click", function() {
//     count = 0;
//     document.getElementById("count").innerText = count;
// });

// document.getElementById("increase").addEventListener("click", function() {
//     count++;
//     document.getElementById("count").innerText = count;
// });

const jokeContent = document.getElementById("joke-text");
const getJokeBtn = document.getElementById("get-joke");
const loader = document.querySelector(".message");

const url = "https://icanhazdadjoke.com/";
getJokeBtn.addEventListener("click", () => {
  getJoke(url);
});

async function getJoke(url) {
  jokeContent.innerHTML = "Generating please waits";
  generateLoading();
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });
  const result = await response.json();
  if (result.status === 200) {
    removeLoading();
  }
  jokeContent.innerHTML = result.joke;
}

function generateLoading() {
  loader.style.display = "block";
  loader.classList.add("loading");
  loader.classList.remove("loaded");
  loader.textContent = "Loading Joke";
}
function removeLoading() {
  loader.classList.add("loaded");
  loader.classList.remove("loading");
  loader.textContent = "Joke loaded";
}
