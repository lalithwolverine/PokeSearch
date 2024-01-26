// let input = document.querySelector('input');
// input.addEventListener('keyup' ,(e)=>
// {
//     if(e.keycode === 13)
//     {
//         console.log(e.target.value);
//     }
// })

async function fetchdata() {
  try {
    const pokemonname = document
      .getElementById("pokemonname")
      .value.toLowerCase();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonname}`
    );

    if (!response.ok) {
      throw new Error("couldnt fetch data");
    }
    const data = await response.json();
    console.log(data);
    const pokemonSprite = data.sprites.front_default;
    const imgEle = document.getElementById("pokemonSprite");
    imgEle.src = pokemonSprite;
    imgEle.style.display = "block";

   // Assuming your object is stored in a variable named 'pokemonData'
   const pokemonData = await response.jason();
const pokemonName = pokemonData.species.name;
console.log(pokemonName); // Output: pikachu

  } 
  catch (error) {
    console.error(error);
  }
}
