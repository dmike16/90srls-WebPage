//@flow

import { useMemo } from "react";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme } from "@material-ui/core/styles";

function useAppTheme(type: "dark" | "light" | null) {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

	const theme = useMemo(
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
			}),
		[prefersDarkMode, type]
	);

	return theme;
}

export default useAppTheme;
