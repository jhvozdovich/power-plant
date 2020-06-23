import { changeState, stateChanger } from './plant.js';

const feed = changeState("soil");
const blueFood = feed(5);
const eat = feed(-1);
const hydrate = changeState("water");
// eslint-disable-next-line
const shortPour = hydrate(2);
const dryout = hydrate(-1);
const giveLight = changeState("light");
// eslint-disable-next-line
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

  $('#feed').click(function () {
    const newState = stateChanger(blueFood);
    $('#soil-value').text(newState.soil);
  });

  $('#water').click(function () {
    const newState = stateChanger(shortPour);
    $("#water-value").text(newState.water);
  });

  $('#light').click(function () {
    const newState = stateChanger(sun);
    $('#light-value').text(newState.light);
  });
});