import { combineReducers } from "redux";
import ui from "./ui/reducer";
import calc from "./calculator/reducer"

export default combineReducers({ ui, calc });