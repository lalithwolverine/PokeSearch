const pokemonContainer = document.querySelector(".pokemon-container");
const spinner = document.querySelector("#spinner");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
const fetchByNameBtn = document.getElementById("fetchByNameBtn");

let limit = 8;
let offset = 1;

previous.addEventListener("click", () => {
  if (offset != 1) {
    offset -= 9;
    removeChildNodes(pokemonContainer);
    fetchPokemons(offset, limit);
  }
});

next.addEventListener("click", () => {
  offset += 9;
  removeChildNodes(pokemonContainer);
  fetchPokemons(offset, limit);
});

// Add click event listener to the Fetch Pokemon by Name button
fetchByNameBtn.addEventListener("click", () => {
  fetchPokemonByName();
});
document.addEventListener("keyup", (event) => {
    if (event.keyCode===13) {
      fetchPokemonByName();
    }
  });
function fetchPokemonByName() {
  const pokemonName = document.getElementById("pokemonNameInput").value.toLowerCase().trim();

  if (pokemonName !== "") {
    // Clear previous content before fetching new Pokemon
    removeChildNodes(pokemonContainer);

    // Fetch the Pokemon by name
    fetchPokemon(pokemonName);
  }
}

function fetchPokemon(idOrName) {
  spinner.style.display = "block";

  fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}/`)
    .then((res) => res.json())
    .then((data) => {
      // Create and display the Pokemon details
      createPokemon(data);
      spinner.style.display = "none";
    })
    .catch((error) => {
      console.error("Error fetching Pokemon:", error);
      spinner.style.display = "none";
    });
}

// Function to fetch initial Pokemon (not called by default)
function fetchPokemons(offset, limit) {
  // Not fetching any Pokemon initially
}

function createPokemon(pokemon) {
  const flipCard = document.createElement("div");
  flipCard.classList.add("flip-card");

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");

  flipCard.appendChild(cardContainer);

  const card = document.createElement("div");
  card.classList.add("pokemon-block");

  const spriteContainer = document.createElement("div");
  spriteContainer.classList.add("img-container");

  const sprite = document.createElement("img");
  sprite.src = pokemon.sprites.front_default;

  spriteContainer.appendChild(sprite);

  const number = document.createElement("p");
  number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

  const name = document.createElement("p");
  name.classList.add("name");
  name.textContent = pokemon.name;

  card.appendChild(spriteContainer);
//   card.appendChild(number);
  card.appendChild(name);

  const cardBack = document.createElement("div");
  cardBack.classList.add("pokemon-block-back");

  cardBack.appendChild(progressBars(pokemon.stats));

  cardContainer.appendChild(card);
  cardContainer.appendChild(cardBack);
  pokemonContainer.appendChild(flipCard);
}

function progressBars(stats) {
  const statsContainer = document.createElement("div");
  statsContainer.classList.add("stats-container");

  for (let i = 0; i < 3; i++) {
    const stat = stats[i];

    const statPercent = stat.base_stat / 2 + "%";
    const statContainer = document.createElement("stat-container");
    statContainer.classList.add("stat-container");

    const statName = document.createElement("p");
    statName.textContent = stat.stat.name;

    const progress = document.createElement("div");
    progress.classList.add("progress");

    const progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");
    progressBar.setAttribute("aria-valuenow", stat.base_stat);
    progressBar.setAttribute("aria-valuemin", 0);
    progressBar.setAttribute("aria-valuemax", 200);
    progressBar.style.width = statPercent;

    progressBar.textContent = stat.base_stat;

    progress.appendChild(progressBar);
    statContainer.appendChild(statName);
    statContainer.appendChild(progress);
    statsContainer.appendChild(statContainer);
  }

  return statsContainer;
}

function removeChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}


















































// const pokemonContainer = document.querySelector(".pokemon-container");
// const spinner = document.querySelector("#spinner");
// const previous = document.querySelector("#previous");
// const next = document.querySelector("#next");
// const fetchByNameBtn = document.getElementById("fetchByNameBtn");
// const search = document.getElementById("pokemonname"); // Add the search input

// let limit = 8;
// let offset = 1;

// // ... (Existing code)

// // Add the fetchdata function definition
// async function fetchdata() {
//   try {
//     const pokemonname = search.value.toLowerCase();

//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`);

//     if (!response.ok) {
//       throw new Error("Couldn't fetch data");
//     }

//     const data = await response.json();
//     console.log(data);

//     const pokemonSprite = data.sprites.front_default;
//     const imgEle = document.getElementById("pokemonSprite");

//     // Set image source and wait for it to load before calling fetchProperties
//     imgEle.onload = function() {
//       imgEle.style.display = "block";
//       fetchProperties();
//     };
//     imgEle.src = pokemonSprite;
//   } catch (error) {
//     console.error(error);
//   }
// }

// // Add the search functionality using the fetchdata function
// function showAlert() {
//   const inputvalue = search.value.trim();
//   if (inputvalue === "") {
//     alert("Enter a Poke name");
//   } else {
//     fetchdata();
//   }
// }

// search.addEventListener("keyup", (e) => {
//   if (e.keyCode === 13) {
//     showAlert();
//   }
// });

// previous.addEventListener("click", () => {
//   if (offset != 1) {
//     offset -= 9;
//     removeChildNodes(pokemonContainer);
//     fetchPokemons(offset, limit);
//   }
// });

// next.addEventListener("click", () => {
//   offset += 9;
//   removeChildNodes(pokemonContainer);
//   fetchPokemons(offset, limit);
// });

// // Add click event listener to the Fetch Pokemon by Name button
// fetchByNameBtn.addEventListener("click", () => {
//   fetchPokemonByName();
// });

// document.addEventListener("keyup", (event) => {
//   if (event.keyCode === 13) {
//     fetchPokemonByName();
//   }
// });

// // Update the fetchPokemonByName function to use the new fetchdata function
// function fetchPokemonByName() {
//   const pokemonName = document.getElementById("pokemonNameInput").value.toLowerCase().trim();

//   if (pokemonName !== "") {
//     // Clear previous content before fetching new Pokemon
//     removeChildNodes(pokemonContainer);

//     // Fetch the Pokemon by name using the new fetchdata function
//     fetchdata(pokemonName);
//   }
// }

// // ... (Remaining existing code)
