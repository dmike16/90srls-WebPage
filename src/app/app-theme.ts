import { useMemo } from "react";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { itIT, enUS } from "@material-ui/core/locale";

function useAppTheme(type: "dark" | "light" | null, locale: string) {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

	let theme = useMemo(
		() =>
			createMuiTheme({
				palette: {
					type: type ? type : prefersDarkMode ? "dark" : "light",
					primary: {
						light: "#4f83cc",
						main: "#01579b",
						dark: "#002f6c",
						contrastText: "#fff"
					},
					secondary: {
						light: "#ecfffd",
						main: "#b9f6ca",
						dark: "#88c399",
						contrastText: "#000"
					}
				}
			}, locale === 'it-IT' ? itIT: enUS),
		[prefersDarkMode, type, locale]
	);
	theme = responsiveFontSizes(theme);

	return theme;
}

export default useAppTheme;
