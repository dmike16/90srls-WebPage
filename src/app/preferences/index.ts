//@flow

import type { Preferences, Action } from "./preferences-model";
import * as ACTIONS from "./preferences-actions";
import * as REDUCERS from "./preferences-reducers";

function initialPreferences(): Preferences {
	return { theme: null };
}

function reducer(state: Preferences, action: Action<any, any>): Preferences {
	switch (action.type) {
		case ACTIONS.SWITCH_THEME:
			return {
				...state,
				theme: REDUCERS.themeReducer(state.theme, action)
			};
		default:
			throw new Error(`Reducer Action [${action.type}] not defined`);
	}
}

export { initialPreferences, reducer };
