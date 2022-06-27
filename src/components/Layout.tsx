import { Box, Container, Stack, ThemeProvider } from "@mui/material"
import ResponsiveTopBar from "./ResponsiveTopBar"
import * as React from "react"
import { ReactNode } from "react"
import PageBreadcrumbs from "./PageBreadcrumbs"
import theme from "../config/theme"
import { Page } from "../config/pages"

const Layout = ({ page, children }: { page: Page, children: ReactNode }) => {
	return (
		<ThemeProvider theme={theme}>
			<Box>
				<ResponsiveTopBar page={page}/>
				<Container component={Stack} spacing={2} sx={{
					marginBottom: theme.spacing(4)
				}}>
					<PageBreadcrumbs page={page}/>
					{children}
				</Container>
			</Box>
		</ThemeProvider>
	)
}

export default Layout
