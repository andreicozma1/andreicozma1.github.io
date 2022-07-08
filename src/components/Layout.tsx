import { Box, Container, Stack, ThemeProvider } from "@mui/material"
import ResponsiveTopBar from "./ResponsiveTopBar"
import * as React from "react"
import { ReactNode } from "react"
import PageBreadcrumbs from "./PageBreadcrumbs"
import theme from "../config/theme"
import { Page } from "../config/pages"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import particlesOptions from "../config/particles.json"

const Layout = ({ page, children }: { page: Page, children?: ReactNode }) => {

	// @ts-ignore
	const particlesInit = async (engine) => {
		await loadFull(engine)
	}

	return (
		<div>
			<ThemeProvider theme={theme}>
				{/*// @ts-ignore*/}
				<Particles init={particlesInit} options={particlesOptions}
						   style={{ filter: "blur(15px)" }}/>
				<Box>
					<ResponsiveTopBar page={page}/>
					<Container component={Stack} spacing={2} sx={{
						marginBottom: theme.spacing(4),
						opacity: 0.99
					}}>
						{page.content && <PageBreadcrumbs page={page}/>}
						{page.content && page.content.map((section, i) => (
							<section.layout section={section}></section.layout>
						))}

						{children}
					</Container>
				</Box>
			</ThemeProvider>
		</div>

	)
}

export default Layout
