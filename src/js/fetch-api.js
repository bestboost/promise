import '../css/common.css';
import pokemopCardTpl from '../templates/pokemon-card.hbs';

fetch('https://pokeapi.co/api/v2/pokemon/2').then(response => {
     return response.json();     
}).then(pokemon => {
     console.log("fetch  pokemon:", pokemon);
     const pokemonMarkup = pokemopCardTpl(pokemon);
     console.log("fetch  pokemonMarkup:", pokemonMarkup)
     
}).catch(error => {
     console.log("fetch  error:", error)    
});