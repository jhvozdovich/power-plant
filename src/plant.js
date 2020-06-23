export const storeState = () => {
  let currentState = {};
  return stateChangeFunction => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

export const stateChanger = storeState();

export const changeState = prop => {
  return value => {
    return state => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    });
  };
};

// let plant = { soil: 0, light: 0, water: 0 };

// let Sansevieria = changeState(plant, power, 0);

// const feed = changeState("soil");
// const hydrate = changeState("water");
// const giveLight = changeState("light");
// const superfood = feed(5)
// const greenFood = feed(10)
// const fedPlant = stateChanger(superfood);
// const plantFedAgain = stateChanger(greenFood);


// const feed = value => {
//   return state => ({
//     ...state,
//     [soil]: (state[soil] || 0) + value
//   })
// }


// const superfood = feed(5)
// // same as const superfood = changeState("soil")(5)

// const superfood = state => ({
//   ...state,
//   [soil]: (state[soil] || 0) + 5
// })


// const hydrate = (plant) => {
//   return {
//     ...plant,
//     water: (plant.water || 0) + 1
//   }
// };

// const feed = (plant) => {
//   return {
//     ...plant,
//     soil: (plant.soil || 0) + 1
//   }
// };

// const giveLight = (plant) => {
//   return {
//     ...plant,
//     light: (plant.light || 0) + 1
//   }
// };
