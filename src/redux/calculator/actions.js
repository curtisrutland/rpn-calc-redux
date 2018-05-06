import { 
  NUMBER_PRESSED, CLEAR_PRESSED, BACKSPACE_PRESSED,
  DECIMAL_PRESSED, ENTER_PRESSED, BINARY_OPERATOR_PRESSED
} from "./actionTypes";
import action from "../../helpers/action";

export const numberPressed = number => action(NUMBER_PRESSED, number);
export const clearPressed = () => action(CLEAR_PRESSED);
export const backspacePressed = () => action(BACKSPACE_PRESSED);
export const decimalPressed = () => action(DECIMAL_PRESSED);
export const enterPressed = () => action(ENTER_PRESSED);
export const binaryOperatorPressed = operator => action(BINARY_OPERATOR_PRESSED, operator);