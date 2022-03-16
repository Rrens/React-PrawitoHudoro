const redux = require("redux");
const createStore = redux.createStore;

const intialState = {
  value: 0,
  age: 17,
};

// Reducer
// untuk melakukan perubahan dari redux
const rootReducer = (state = intialState, action) => {
  //   if (action.type === "ADD_AGE") {
  //     return {
  //       ...state,
  //       age: state.age + 1,
  //     };
  //   }
  //   if (action.type === "CHANGE_VALUE") {
  //     return {
  //       ...state,
  //       value: state.value + action.newValue,
  //     };
  //   }

  switch (action.type) {
    case "ADD_AGE":
      return {
        ...state,
        age: state.age + 1,
      };

    case "CHANGE_VALUE":
      return {
        ...state,
        value: state.value + action.newValue,
      };
    default:
      return state;
  }

  return state;
  //   console.log(action);
};

// Store
const store = createStore(rootReducer);
// console.log(store.getState());

// subscribe
store.subscribe(() => {
  console.log("Store Change: ", store.getState());
});

// discapth Action
// perintah yang diberikan
store.dispatch({ type: "ADD_AGE" });
store.dispatch({ type: "CHANGE_VALUE", newValue: 14 });
console.log(store.getState());
