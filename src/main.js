// import { changeState, stateChanger, storeState } from './plant.js';
import { changeState, stateChanger } from './plant.js';

const feed = changeState("soil");
const blueFood = feed(5);
const eat = feed(-1);
const hydrate = changeState("water");

const shortPour = hydrate(2);
const dryout = hydrate(-1);
const giveLight = changeState("light");

const sun = giveLight(5);
const helloDarkness = giveLight(-1);

$(document).ready(function () {
  //drying 
  setInterval(() => {
    const newState = stateChanger(dryout);
    if (newState.water < 0) {
      $("#water-value").text("Dry :(");
    } else {
      $("#water-value").text(newState.water);
    }
  }, 5000);
  //eating
  setInterval(() => {
    const newState = stateChanger(eat);
    if (newState.soil < 0) {
      $("#soil-value").text("Hungy > n < ;");
    } else {
      $('#soil-value').text(newState.soil);
    }
  }, 10000);
  // HELLO DARKNESS MY OLD FRIEND  
  setInterval(() => {
    const newState = stateChanger(helloDarkness);
    if (newState.light < 0) {
      $("#light-value").text("Yo it's dark in here!");
    } else {
      $("#light-value").text(newState.light);
    }
  }, 7500);

  let htmlAngyBulba = "<img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/162292c0-dd68-48c0-a97a-df1ed2c79da3/dc4piz2-68ba2897-a797-469e-837c-7a030739957a.png/v1/fill/w_700,h_350,strp/angry_bulbasaur_by_lukeblizz_dc4piz2-350t.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvMTYyMjkyYzAtZGQ2OC00OGMwLWE5N2EtZGYxZWQyYzc5ZGEzXC9kYzRwaXoyLTY4YmEyODk3LWE3OTctNDY5ZS04MzdjLTdhMDMwNzM5OTU3YS5wbmciLCJ3aWR0aCI6Ijw9MTgwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.9N7oWfSVUnrcouKwbY7sQOn_d5xS8hrorKMyB1U_1UU' width=80% alt='bulbasaur mood'>";

  let htmlHypeBulba = "<img src='https://i.ytimg.com/vi/abe7iRiZkpY/maxresdefault.jpg' width=80% alt='bulbasaur mood'>";

  let htmlNormalBulba = "<img src='https://static.pokemonpets.com/images/monsters-images-300-300/1-Bulbasaur.png' width=80% alt='bulbasaur mood'>";


  const bulbaHappines = () => {
    const newState = stateChanger(changeState("light")(0));
    if (newState.light <= 0 && newState.water <= 0 && newState.soil <= 0) {
      $("#bulba-pic").html(htmlAngyBulba);
    } else if (newState.light <= 0 || newState.water <= 0 || newState.soil <= 0) {
      $("#bulba-pic").html(htmlNormalBulba);
    } else {
      $("#bulba-pic").html(htmlHypeBulba);
    }
  };

  setInterval(() => {
    bulbaHappines();
  }, 1000);

  $('#feed').click(function () {
    const newState = stateChanger(blueFood);
    $('#soil-value').text(newState.soil);
    bulbaHappines();

  });

  $('#water').click(function () {
    const newState = stateChanger(shortPour);
    $("#water-value").text(newState.water);
    bulbaHappines();
  });

  $('#light').click(function () {
    const newState = stateChanger(sun);
    $('#light-value').text(newState.light);
    bulbaHappines();
  });
});