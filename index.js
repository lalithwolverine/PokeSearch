

async function fetchdata() {
  try {
    const pokemonname= document.getElementById("pokemonname").value.toLowerCase();

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`);

    if (!response.ok) {
      throw new Error("couldnt fetch data");
    }
    const data = await response.json();
    // console.log(data);
    const pokemonSprite = data.sprites.front_default;
    const imgEle = document.getElementById("pokemonSprite");
    imgEle.src = pokemonSprite;
    imgEle.style.display = "block";
     console.log(pokemonname);
  } 
  catch (error) {
    console.error(error);
  }
}

fetchdata();