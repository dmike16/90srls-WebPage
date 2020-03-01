//@flow
import { ThemeAction } from "./theme-action";

function themeReducer(state: ?string, action: ThemeAction): "light" | "dark" | null {
	return action.payload;
}

export {themeReducer};