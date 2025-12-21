/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import React from "react"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import Theme from "../config/Theme"

interface ThemeWrapperProps {
	children: React.ReactNode
}

const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
	return (
		<ThemeProvider theme={Theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	)
}

export default ThemeWrapper
