import * as actionTypes from "../actionTypes";

const initialState = {
  counter: 0,
  name: "shehab"
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.INCREASE_COUNTER:
      return { ...state, counter: state.counter + action.payload };

    default:
      return state;
  }
}
