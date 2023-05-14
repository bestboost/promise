import '../css/common.css';
import pokemopCardTpl from '../templates/pokemon-card.hbs';

const refs = {
     cardContainer: document.querySelector('.js-card-container'),

};


fetchPokemon(1)
.then(renderPokemonCard)
.catch(error =>  error)

function fetchPokemon(pokemonId){
return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)  
.then(response => {
     return response.json();     
})

};

function renderPokemonCard(pokemon) {
     const markup = pokemopCardTpl(pokemon);
      refs.cardContainer.innerHTML = markup; 
};