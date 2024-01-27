async function fetchdata() {
  try {
    const pokemonname = document.getElementById("pokemonname").value.toLowerCase();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonname}`
    );

    if (!response.ok) {
      throw new Error("Couldn't fetch data");
    }

    const data = await response.json();
    console.log(data);

    const pokemonSprite = data.sprites.front_default;
    const imgEle = document.getElementById("pokemonSprite");
    imgEle.src = pokemonSprite;
    imgEle.style.display = "block";

    
  
  } catch (error) {
    console.error(error);
  }
}

//ENTER KEY TO SEARCH
const search = document.getElementById("pokemonname");

function showAlert() {
  const inputvalue=search.value.trim();
  if(inputvalue==="")
  {
    alert("Enter a Poke name");
  }
  else{
  fetchdata();
  }
}

search.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    showAlert();
  }
});