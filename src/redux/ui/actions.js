import { TOGGLE_DRAWER, OPEN_DRAWER, CLOSE_DRAWER } from "./actionTypes";
import action from "../../helpers/action";

export const toggleDrawer = () => action(TOGGLE_DRAWER);
export const openDrawer = () => action(OPEN_DRAWER);
export const closeDrawer = () => action(CLOSE_DRAWER);