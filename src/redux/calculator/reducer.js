import * as Immutable from "immutable";
import { 
  NUMBER_PRESSED, CLEAR_PRESSED, BACKSPACE_PRESSED,
  DECIMAL_PRESSED
} from "./actionTypes";

const initialState = {
  stack: Immutable.Stack(),
  displayText: "0",
  acceptsInput: true
};

const backspace = (state) => {
  if (!state.acceptsInput) return {
    ...state,
    displayText: "0"
  };
  if (state.displayText.length <= 1) return {
    ...state,
    displayText: "0"
  }
  return {
    ...state,
    displayText: state.displayText.slice(0, -1)
  }
};

const numberPressed = (state, { payload: num }) => {
  if (!state.acceptsInput) {
    return {
      ...state,
      displayText: num.toString(),
      acceptsInput: true
    };
  } else {
    let displayText = state.displayText === "0"
      ? num.toString()
      : state.displayText + num.toString();
    return {
      ...state,
      displayText
    };
  }
};

const clearPressed = state => ({
  ...state,
  displayText: "0",
  stack: Immutable.Stack(),
  acceptsInput: true
});

const decimalPressed = state => {
  if (!state.acceptsInput) {
    return {
      ...state,
      acceptsInput: true,
      displayText: "0."
    };
  } else {
    if(state.displayText.indexOf(".") > -1) 
      return state;
    return {
      ...state,
      displayText: state.displayText + "."
    };
  }
}

const enter = state => {

}

export default (state = initialState, action) => {
  switch (action.type) {
    case NUMBER_PRESSED:
      return numberPressed(state, action);

    case CLEAR_PRESSED:
      return clearPressed(state);

    case BACKSPACE_PRESSED:
      return backspace(state);

    case DECIMAL_PRESSED:
      return decimalPressed(state);

    default:
      return state;
  }
}

