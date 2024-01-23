console.log(`test`);

const soldier = document.querySelector(`.soldier`);
const ship = document.querySelector(`.ship`);
const display = document.querySelector(`.display`);
const button = document.querySelector(`.next`);

const people = "https://swapi.dev/api/people/";
const ships = " https://swapi.dev/api/starships/";

function fetchPeople(people) {
  fetch(people)
    .then(function (result) {
      return result.json();
    })
    .then(function (data) {
      //console.log(data);
      renderPeople(data);
    });
}

//fetchPeople(people);

function getShips(ships) {
  fetch(ships)
    .then(function (result) {
      return result.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

//getShips(ships);

function renderPeople(data) {
  console.log(data);
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

  for (let man of data.results) {
    console.log(man);
    table += `<tr>
    <td>${man.name}</td>
    <td>${man.height}</td>
    <td>${man.mass}</td>
    <td>${man.gender}</td>
    <td>${man.birth_year}</td>
    <td>${man.films.length}</td>
</tr>`;
    display.innerHTML = table;
  }

  display.innerHTML += `<div class="tableBtn"></div>`;

  const divBtn = document.querySelector(`.tableBtn`);

  divBtn.innerHTML += `
  <button type="button" id="previous">Previous</button>
  <button type="button" id="next">Next</button>
  `;
  const previous = document.querySelector(`#previous`);
  const next = document.querySelector(`#next`);

  if (data.previous) {
    console.log(previous);
    previous.addEventListener(`click`, function () {
      console.log(`click`);
      fetchPeople(data.previous);
    });
  } else {
    previous.disabled = true;
  }

  if (data.next) {
    next.addEventListener(`click`, function () {
      fetchPeople(data.next);
    });
  } else {
    next.disabled = true;
  }
}

soldier.addEventListener(`click`, function () {
  console.log(`soldier`);
  //getting people
  fetchPeople(people);
});

ship.addEventListener(`click`, function () {
  console.log(`ship`);
  //getting ships
  getShips(ships);
});
