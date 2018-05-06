import * as Immutable from "immutable";

export const backspace = (state) => {
  if (!state.acceptsInput) return {
    ...state,
    error: null,
    displayText: "0"
  };
  if (state.displayText.length <= 1) return {
    ...state,
    error: null,
    displayText: "0"
  }
  return {
    ...state,
    error: null,
    displayText: state.displayText.slice(0, -1)
  }
};

export const num = (state, num) => {
  if (!state.acceptsInput) {
    return {
      ...state,
      error: null,
      displayText: num.toString(),
      acceptsInput: true
    };
  } else {
    let displayText = state.displayText === "0"
      ? num.toString()
      : state.displayText + num.toString();
    return {
      ...state,
      error: null,
      displayText
    };
  }
};

export const clear = state => ({
  ...state,
  error: null,
  displayText: "0",
  stack: Immutable.Stack(),
  acceptsInput: true
});

export const decimal = state => {
  if (!state.acceptsInput) {
    return {
      ...state,
      error: null,
      acceptsInput: true,
      displayText: "0."
    };
  } else {
    if (state.displayText.indexOf(".") > -1)
      return state;
    return {
      ...state,
      error: null,
      displayText: state.displayText + "."
    };
  }
}

export const enter = state => {
  if (state.error) return state;
  let val = parseFloat(state.displayText);
  const acceptsInput = false;
  const stack = state.stack.push(val);
  console.log("new stack", stack);
  return {
    ...state,
    acceptsInput,
    stack
  };
}

export const binOp = (state, operator) => {
  return error(state, "Not Implemented");
}

export const error = (state, error) => {
  return {
    ...state,
    stack: Immutable.Stack(),
    displayText: "0",
    error,
    acceptsInput: false
  }
}