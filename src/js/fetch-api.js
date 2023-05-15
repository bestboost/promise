import '../css/common.css';
import pokemopCardTpl from '../templates/pokemon-card.hbs';
import API from './api-service';
import getRefs from './get-refs';

const refs = getRefs();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
     e.preventDefault();

     const form = e.currentTarget;
     const searchQuery = form.elements.query.value;

     API.fetchPokemon(searchQuery)
.then(renderPokemonCard)
.catch(onFetchError)
.finally(() => form.reset());
}; 

function renderPokemonCard(pokemon) {
     const markup = pokemopCardTpl(pokemon);
      refs.cardContainer.innerHTML = markup; 
};

function onFetchError(error) {
     alert('Упс, что-то пошло не так и мы не нашли вашего покемона!');
};