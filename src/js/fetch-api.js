import '../css/common.css';
import pokemopCardTpl from '../templates/pokemon-card.hbs';
import API from './api-service';

const refs = {
     cardContainer: document.querySelector('.js-card-container'),
     searchForm: document.querySelector('.js-search-form')
};

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
     e.preventDefault();

     const form = e.currentTarget;
     const searchQuery = form.elements.query.value;

     fetchPokemon(searchQuery)
.then(renderPokemonCard)
.catch(onFetchError)
.finally(() => form.reset());
}; 

function fetchPokemon(pokemonId){
const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

return fetch(url)
.then(response => {
     return response.json();     
  });
};

function renderPokemonCard(pokemon) {
     const markup = pokemopCardTpl(pokemon);
      refs.cardContainer.innerHTML = markup; 
};

function onFetchError(error) {
     alert('Упс, что-то пошло не так и мы не нашли вашего покемона!');
};