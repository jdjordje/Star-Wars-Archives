console.log(`test`);

const soldier = document.querySelector(`.soldier`);
const ship = document.querySelector(`.ship`);
const planet = document.querySelector(`#planet`);
const errorDisplay = document.querySelector(`.errorDisplay`);
const display = document.querySelector(`.display`);
const button = document.querySelector(`.next`);

const people = "https://swapi.dev/api/people/";
const ships = " https://swapi.dev/api/starships";
const planets = `https://swapi.dev/api/planets/`;

const fetchPeople = async url => {
  try {
    const result = await fetch(url);
    const data = await result.json();
    renderPeople(data);
  } catch (error) {
    alert(`Can't fetch StarWars people!`);
  }
};

const getShips = async url => {
  try {
    const result = await fetch(url);
    const data = await result.json();
    renderShips(data);
  } catch (error) {
    alert(`Can't fetch Ships data`);
  }
};

const fetchPlanets = async url => {
  try {
    const result = await fetch(url);
    const data = await result.json();
    renderPlanets(data);
  } catch (error) {
    alert(`Can't fetch StarWars planets!`);
  }
};

const alert = text => {
  display.innerHTML = "";
  errorDisplay.innerHTML = text;
};

const renderPlanets = data => {
  //console.log(data);
  errorDisplay.innerText = "";
  display.innerHTML = "";
  let table = `<table border="1">
    <thead>
      <tr>
        <th>Planet Name</th>
        <th>Population</th>
        <th>Climate</th>
        <th>Gravity</th>
        <th>Terrain</th>
       
      </tr>
    </thead>
    <tbody>`;

  data.results.forEach(planet => {
    //console.log(planet);
    table += `<tr>
    <td>${planet.name}</td>
    <td>${planet.population}</td>
    <td>${planet.climate}</td>
    <td>${planet.gravity}</td>
    <td>${planet.terrain}</td>
    
</tr>`;
    display.innerHTML = table;
  });

  display.innerHTML += `<div class="tableBtn"></div>`;

  const divBtn = document.querySelector(`.tableBtn`);

  divBtn.innerHTML += `
  <button type="button" id="previous">Previous</button>
  <button type="button" id="next">Next</button>
  `;
  const previous = document.querySelector(`#previous`);
  const next = document.querySelector(`#next`);

  if (data.previous) {
    // console.log(previous);
    previous.addEventListener(`click`, () => {
      // console.log(`click`);
      fetchPeople(data.previous);
    });
  } else {
    previous.disabled = true;
  }

  if (data.next) {
    next.addEventListener(`click`, () => {
      fetchPeople(data.next);
      //console.log("clicked next");
    });
  } else {
    next.disabled = true;
  }
};

const renderPeople = data => {
  //console.log(data);
  errorDisplay.innerText = "";
  display.innerHTML = "";
  let table = `<table border="1">
    <thead>
      <tr>
        <th>Name</th>
        <th>Height</th>
        <th>Mass</th>
        <th>Gender</th>
        <th>Birth Year</th>
        <th>Appearances</th>
      </tr>
    </thead>
    <tbody>`;

  data.results.forEach(man => {
    //console.log(man);
    table += `<tr>
    <td>${man.name}</td>
    <td>${man.height}</td>
    <td>${man.mass}</td>
    <td>${man.gender}</td>
    <td>${man.birth_year}</td>
    <td>${man.films.length}</td>
</tr>`;
    display.innerHTML = table;
  });

  display.innerHTML += `<div class="tableBtn"></div>`;
  const divBtn = document.querySelector(`.tableBtn`);

  divBtn.innerHTML += `
  <button type="button" id="previous">Previous</button>
  <button type="button" id="next">Next</button>
  `;
  const previous = document.querySelector(`#previous`);
  const next = document.querySelector(`#next`);

  if (data.previous) {
    //console.log(previous);
    previous.addEventListener(`click`, () => {
      //console.log(`click`);
      fetchPeople(data.previous);
    });
  } else {
    previous.disabled = true;
  }

  if (data.next) {
    next.addEventListener(`click`, () => {
      fetchPeople(data.next);
      //console.log("clicked next");
    });
  } else {
    next.disabled = true;
  }
};

const renderShips = data => {
  //console.log(data);

  errorDisplay.innerText = "";

  display.innerHTML = "";

  let table = `<table border="1">
    <thead>
      <tr>
        <th>Name</th>
        <th>Model</th>
        <th>Manufacturer</th>
        <th>Cost</th>
        <th>Crew</th>
        <th>Class</th>
      </tr>
    </thead>
    <tbody>`;

  data.results.forEach(ship => {
    table += `<tr>
    <td>${ship.name}</td>
    <td>${ship.model}</td>
    <td>${ship.manufacturer}</td>
    <td>${ship.cost_in_credits}</td>
    <td>${ship.crew}</td>
    <td>${ship.starship_class}</td>
</tr>`;
    display.innerHTML = table;
  });

  display.innerHTML += `<div class="tableBtn"></div>`;

  const divBtn = document.querySelector(`.tableBtn`);

  divBtn.innerHTML += `
  <button type="button" id="previous">Previous</button>
  <button type="button" id="next">Next</button>
  `;
  const previous = document.querySelector(`#previous`);
  const next = document.querySelector(`#next`);

  if (data.previous) {
    previous.addEventListener(`click`, () => {
      getShips(data.previous);
    });
  } else {
    previous.disabled = true;
  }

  if (data.next) {
    next.addEventListener(`click`, () => {
      getShips(data.next);
    });
  } else {
    next.disabled = true;
  }
};

soldier.addEventListener(`click`, () => {
  //getting people
  fetchPeople(people);
});

ship.addEventListener(`click`, () => {
  //getting ships
  getShips(ships);
});

planet.addEventListener(`click`, () => {
  //getting ships
  fetchPlanets(planets);
});
