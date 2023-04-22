// API

const $container = document.getElementById("card-container")

const URL_API = "https://rickandmortyapi.com/api/episode";

fetch(URL_API)
.then ((response) => response.json())
.then ((data) => {
    const characters = data.results;
     console.log(characters)

    for (let character of characters) {
        $container.innerHTML += `
        <div class="card">
        <div class="character-info">
        <h3 class="character-name">${character.name}</h3>
        <p>Episode: ${character.episode}</p>
        <p>Air date: ${character.air_date}</p>
        </div>
        </div>
        `}
    })