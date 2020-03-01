//@flow
import { Action } from "../preferences-model";

const SWITCH_THEME = "SWITCH_THEME";

export interface ThemeAction extends Action<"SWITCH_THEME", "light" | "dark"> {}

export { SWITCH_THEME };
