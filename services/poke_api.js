//GET
import { Pokemon } from '../models/pokemon.js'

export async function getpoke(pokemonId){
    let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)"
       }
       
       let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`, { 
         method: "GET",
         headers: headersList
       });
       
       let data = await response.json();
       
       const pokemon = new Pokemon({
        name: data.name, 
        number: data.id, 
        type: `${data.types[0].type.name} | ${data.types[1] ? data.types[1].type.name : ''}`,
        hp: data.stats[0].base_stat, 
        attack: data.stats[1].base_stat, 
        defense: data.stats[2].base_stat, 
        special_attack: data.stats[3].base_stat, 
        special_defense: data.stats[4].base_stat, 
        speed: data.stats[5].base_stat,
        img: data.sprites.front_default,
        gif: data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'],
        gif_shiny: data['sprites']['versions']['generation-v']['black-white']['animated']['front_shiny']
      });
       
       return pokemon;
}