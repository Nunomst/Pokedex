export function pokestats(pokemon){
    const pokemonItem = document.createElement('div');
    pokemonItem.className = 'pokemon-stats';
    pokemonItem.innerHTML = `
    <div class="button-shiny">
    <button class="btn-shiny">Shiny</button>
    </div>
    <img src="${pokemon.gif}" alt="" class="pokemon_gif">
    <div class="poke-desc">
      <p>Name: ${pokemon.name}</p>
      <p>Number: ${pokemon.number}</p>
      <p>Types: ${pokemon.type}</p> 
      <hr>
      <p>Base Stats:</p>
        <div class="stats">
          <p>HP: ${pokemon.hp}</p>
          <p>Special-Defense: ${pokemon.special_defense}</p>
          <p>Attack: ${pokemon.attack}</p>
          <p>Special-Attack: ${pokemon.special_attack}</p>
          <p>Defense: ${pokemon.defense}</p>
          <p>Speed: ${pokemon.speed}</p>
        </div>
    </div> 
    `;

    // BOTAO SHINY
    const button = pokemonItem.querySelector('.btn-shiny');
    button.addEventListener('click', () => {
      const image = pokemonItem.querySelector('.pokemon_gif');
      if (button.textContent === 'Shiny') {
        image.src = pokemon.gif_shiny;
        button.textContent = 'Original';
      } else {
        image.src = pokemon.gif;
        button.textContent = 'Shiny';
      }
    });

    document.querySelector('.modal-content').appendChild(pokemonItem);

  // Fechar modal
  const modal = document.getElementById("myModal");
  const span = document.getElementsByClassName("close")[0];
  window.onclick = function(event) {
  if (event.target == modal || event.target == span) {
    modal.style.display = "none";
    const pokemonStats = document.querySelector('.pokemon-stats');
    pokemonStats && pokemonStats.remove();
  }
}
}