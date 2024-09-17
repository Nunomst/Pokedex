import './style.css'
import { getpoke } from './services/poke_api.js'
import { gridpokeshow } from './components/showpokemon.js'
import { searchpoke } from './components/searchbar.js';

searchpoke();

const pokemonCount = 10; 

for (let i = 0; i < pokemonCount; i++) {
  const pokemonNumber = i + 1;
  const pokemon = await getpoke(pokemonNumber.toString());
  pokemon.number = pokemonNumber;
  gridpokeshow(pokemon);
}