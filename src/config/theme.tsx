import { createTheme } from "@mui/material"

// https://www.schemecolor.com/gold-blue-color-combination.php

const theme = createTheme({
	spacing: 8, palette: {
		primary: {
			main: "#002233"
		}, secondary: {
			main: "#e9bd6c", light: "#ebd5ac", dark: "#e7a52c"
		}, background: {
			default: "#ededed"
		}
	}
})

export default theme