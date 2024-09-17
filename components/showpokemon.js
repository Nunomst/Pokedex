import { pokestats } from '../components/pokedex_stats.js';

export function gridpokeshow(pokemon) {
    const pokemonItem = document.createElement('div');
    pokemonItem.className = 'pokemon-item';
    pokemonItem.innerHTML = `
      <img src="${pokemon.img}" alt="">
      <span>${pokemon.number} - ${pokemon.name}</span>
      <button class="showbtn">Show more</button>
    `;
    document.querySelector('.pokemon-grid-view').appendChild(pokemonItem);

    const btn = pokemonItem.querySelector(`button`);
    btn.addEventListener('click', () => {
      const modal = document.getElementById("myModal");
      modal.style.display = "block";
      pokestats(pokemon);
    });
  }
  