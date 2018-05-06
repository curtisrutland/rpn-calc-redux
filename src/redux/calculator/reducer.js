import * as Immutable from "immutable";
import {
  NUMBER_PRESSED, CLEAR_PRESSED, BACKSPACE_PRESSED,
  DECIMAL_PRESSED, ENTER_PRESSED, BINARY_OPERATOR_PRESSED
} from "./actionTypes";
import * as calculator from "../../helpers/calculator";

const initialState = {
  stack: Immutable.Stack(),
  displayText: "0",
  acceptsInput: true,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NUMBER_PRESSED:
      return calculator.num(state, action.payload);

    case CLEAR_PRESSED:
      return calculator.clear(state);

    case BACKSPACE_PRESSED:
      return calculator.backspace(state);

    case DECIMAL_PRESSED:
      return calculator.decimal(state);

    case ENTER_PRESSED:
      return calculator.enter(state);

    case BINARY_OPERATOR_PRESSED:
      return calculator.binOp(state, action.payload);

    default:
      return state;
  }
}

