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
  if ( state.acceptsInput) {
    state = enter(state);
  }
  if (state.stack.size < 2) {
    return error(state, "Stack Underflow");
  }
  const b = state.stack.peek();
  let stack = state.stack.pop();
  const a = stack.peek();
  stack = stack.pop();
  const result = operators[operator](a, b);
  stack = stack.push(result);
  const displayText = result.toString();
  return {
    ...state,
    displayText,
    stack
  }
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

export const operatorNames = {
  DIVIDE: "DIVIDE",
  MULTIPLY: "MULTIPLY",
  ADD: "ADD",
  SUBTRACT: "SUBTRACT"
};

const operators = {
  [operatorNames.DIVIDE] : (a, b) => a / b,
  [operatorNames.MULTIPLY]: (a, b) => a * b,
  [operatorNames.ADD]: (a, b) => a + b,
  [operatorNames.SUBTRACT]: (a, b) => a - b
}