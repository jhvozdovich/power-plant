const changePlantState = (plant, prop) => {
  return {
    ...plant,
    [prop]: (plant[prop] || 0) + 1
  }
}

const hydrate = (plant) => {
  return {
    ...plant,
    water: (plant.water || 0) + 1
  }
};

const feed = (plant) => {
  return {
    ...plant,
    soil: (plant.soil || 0) + 1
  }
};

const giveLight = (plant) => {
  return {
    ...plant,
    light: (plant.light || 0) + 1
  }
};

let plant = { soil: 0, light: 0, water: 0 }


let Sansevieria = changePlantState(plant, water);