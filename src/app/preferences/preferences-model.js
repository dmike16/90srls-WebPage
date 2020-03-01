//@flow
export type Preferences = {
	theme: "dark" | "light" | null;
	// TODO: add cookies pref model
}

export interface Action<K: string, T> {
	type: K;
	payload: T;
}
