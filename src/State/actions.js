import * as actionTypes from "./actionTypes";

export function increaseCounter(value) {
  return { type: actionTypes.INCREASE_COUNTER, payload: value };
}
