import { Alert, Box, Container, Stack, ThemeProvider } from "@mui/material"
import ResponsiveTopBar from "./ResponsiveTopBar"
import * as React from "react"
import { ReactNode } from "react"
import PageBreadcrumbs from "./PageBreadcrumbs"
import theme from "../config/theme"
import { Page } from "../config/pages"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import particlesOptions from "../config/particles.json"

const Layout = ({
					data,
					children
				}: { data: Page, children?: ReactNode }) => {

	// @ts-ignore
	const particlesInit = async (engine) => {
		await loadFull(engine)
	}

	return (<ThemeProvider theme={theme}>
			{/*// @ts-ignore*/}
			<Particles init={particlesInit} options={particlesOptions}
					   style={{
						   filter: "blur(15px)"
					   }}/>
			<Box>
				<ResponsiveTopBar page={data}/>
				<Container component={Stack} spacing={2} sx={{
					paddingBottom: theme.spacing(4),
					opacity      : 0.99
				}}>
					{data.content && <PageBreadcrumbs page={data}/>}
					{data.notes && data.notes.map((note, i) => {
						return <Alert key={i} severity={note.severity}>{note.text}</Alert>
					})}
					{data.content && data.content.map((section, i) => (
						<section.Layout section={section}></section.Layout>))}

					{children}
				</Container>
			</Box>
		</ThemeProvider>)
}

export default Layout
