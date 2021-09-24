var elSiteNav = document.querySelector('.site-nav');

for (var pokemon of pokemons) {
  var siteNavItem = document.createElement('li');
  var newHeading = document.createElement('h3');
  var newImg = document.createElement('img');
  var newType = document.createElement('p');
  var newWidth = document.createElement('span');
  var newHeight = document.createElement('span');
  var newCandy = document.createElement('span');
  var newCandyCount = document.createElement('span');
  var newEgg = document.createElement('p');
  var newSpawnChange = document.createElement('p');
  var newAvgSpawns = document.createElement('p');
  var newSpawnTime = document.createElement('time');
  var newMultipliers = document.createElement('p');
  var newWeaknesses = document.createElement('span');
  // var newNextEvolution = document.createElement('li');

  newHeading.textContent = `Name: ${pokemon.name}`;
  newType.textContent = `Type: ${pokemon.type}`;
  newWidth.textContent = `Width: ${pokemon.weight}`;
  newHeight.textContent = `Height: ${pokemon.height}`;
  newCandy.textContent = `Candy: ${pokemon.candy}`;
  newCandyCount.textContent = `Candy count: ${pokemon.candy_count}`;
  newEgg.textContent = `Egg: ${pokemon.egg}`;
  newSpawnChange.textContent = `Spawn change: ${pokemon.spawn_chance}`;
  newAvgSpawns.textContent = `Avg Spawns: ${pokemon.avg_spawns}`;
  newSpawnTime.textContent = `Spawns time: ${pokemon.spawn_time}`;
  newMultipliers.textContent = `Multipliers: ${pokemon.multipliers}`;
  newWeaknesses.textContent = `Weaknesses: ${pokemon.weaknesses}`;

  // for(var next of pokemon.next_evolution) {
  //   newNextLi = document.createElement();
  // }

  elSiteNav.setAttribute('class','m-0 p-0 list-unstyled d-flex flex-wrap justify-content-between pt-5')
  siteNavItem.setAttribute('class', 'site-nav__item d-flex flex-column mb-5');
  newHeading.setAttribute('class', 'pokemon-heading');
  newImg.setAttribute('class', 'pokemon-img mb-3');
  newImg.setAttribute('src', pokemon.img);
  newImg.setAttribute('width', '150');
  newImg.setAttribute('height', '150');
  newType.setAttribute('class', 'pokemon-type');
  newType.setAttribute('class', 'm-0');
  newWidth.setAttribute('class', 'pokemon-width');
  newHeight.setAttribute('class', 'pokemon-height');
  newCandy.setAttribute('class', 'pokemon-candy');
  newCandy.setAttribute('class', 'pokemon-candy__count');
  newEgg.setAttribute('class', 'pokemon-egg');
  newEgg.setAttribute('class', 'm-0');
  newSpawnChange.setAttribute('class', 'pokemon-spawn__change');
  newSpawnChange.setAttribute('class', 'm-0');
  newAvgSpawns.setAttribute('class', 'pokemon-spawn__change');
  newAvgSpawns.setAttribute('class', 'm-0');
  newSpawnTime.setAttribute('class', 'pokemon-spawn__time');
  newMultipliers.setAttribute('class', 'pokemon-spawn__change');
  newMultipliers.setAttribute('class', 'm-0');
  newWeaknesses.setAttribute('class', 'pokemon-weaknesses');
  
  siteNavItem.appendChild(newHeading);  
  siteNavItem.appendChild(newImg);
  siteNavItem.appendChild(newType);
  siteNavItem.appendChild(newWidth);
  siteNavItem.appendChild(newHeight);
  siteNavItem.appendChild(newCandy);
  siteNavItem.appendChild(newCandyCount);
  siteNavItem.appendChild(newEgg);
  siteNavItem.appendChild(newSpawnChange);
  siteNavItem.appendChild(newAvgSpawns);
  siteNavItem.appendChild(newSpawnTime);
  siteNavItem.appendChild(newMultipliers);
  siteNavItem.appendChild(newWeaknesses);
  elSiteNav.appendChild(siteNavItem);
}