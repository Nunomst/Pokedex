import { getpoke } from '../services/poke_api.js'
import { gridpokeshow } from '../components/showpokemon.js'

export function searchpoke() {
    const pokemonItem = document.createElement('div');
    pokemonItem.className = 'search-bar';
    pokemonItem.innerHTML = `
    <h1>Search for a Pokemon:</h1>
    <form class="search_form">
      <input class="search_form_input" type="text" name="search_keyword_input" placeholder="Name or number">
      <button type="submit" class="search_form_button">Search</button>
    </form>
    `;
    document.querySelector('.header').appendChild(pokemonItem);

    const formEL = document.querySelector('form');
    const inputEL = document.querySelector('input')
    const pokemonGridView = document.querySelector('.pokemon-grid-view');

    formEL.addEventListener("submit", (e) => {
      e.preventDefault();
      pokemonGridView.innerHTML = '';
      getpoke(inputEL.value).then(pokemon => gridpokeshow(pokemon))
    })
}
  

