import { Box, Container, Fade, Stack, ThemeProvider, useMediaQuery } from "@mui/material"
import ResponsiveTopBar from "../TopBar"
import * as React from "react"
import { ReactNode, useEffect } from "react"
import PageBreadcrumbs from "./PageBreadcrumbs"
import theme from "../../config/theme"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import particlesOptions from "../../config/particles.json"
import { PageProps } from "../interfaces/PageProps"
import SlideNotes from "../SlideNotes"
import PageSectionTemplate from "./PageSectionTemplate"

const Page = ({
				  pageProps,
				  children
			  }: { pageProps: PageProps, children?: ReactNode }) => {

	const matches = useMediaQuery(theme.breakpoints.up("md"))
	// @ts-ignore
	const particlesInit = async (engine) => {
		await loadFull(engine)
	}
	const particlesOptionsCopy = { ...particlesOptions }
	if (pageProps.href === "/") {
		particlesOptionsCopy.particles.opacity.value = 0.5
	} else {
		particlesOptionsCopy.particles.opacity.value = 0.25
	}
	if (matches) {
		particlesOptionsCopy.particles.size.value = 200
		particlesOptionsCopy.particles.size.anim.size_min = 50
	} else {
		particlesOptionsCopy.particles.size.value = 150
		particlesOptionsCopy.particles.size.anim.size_min = 30
	}

	const [ checked, setChecked ] = React.useState(false)
	useEffect(() => {
		setChecked(true)
	}, [])

	return (<ThemeProvider theme={theme}>
		{/*// @ts-ignore*/}
		<Particles init={particlesInit} options={particlesOptionsCopy}
				   style={{
					   position: "fixed",
					   filter  : theme.particles.filter
				   }}/>
		<ResponsiveTopBar page={pageProps}/>
		<Container component={Stack} spacing={2} sx={{
			paddingBottom: theme.spacing(3),
			opacity      : 0.99
		}}>
			{pageProps.sections && <PageBreadcrumbs page={pageProps}/>}
			{pageProps.notes && <SlideNotes notesArray={pageProps.notes}/>}

			<Fade in={checked}
				  timeout={theme.transitionDuration.page}>
				<Box>
					{pageProps.sections && pageProps.sections.map((section, index) => {
						if (React.isValidElement(section)) return section
						return <PageSectionTemplate key={index} props={section}></PageSectionTemplate>
					})}
					{children}
				</Box>
			</Fade>
		</Container>
	</ThemeProvider>)
}

export default Page
