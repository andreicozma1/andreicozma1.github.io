import { Box, Container, Fade, Stack, ThemeProvider, useMediaQuery } from "@mui/material"
import ResponsiveTopBar from "../ui/TopBar"
import * as React from "react"
import { ReactNode, useEffect } from "react"
import PageBreadcrumbs from "./PageBreadcrumbs"
import ThemeConfig from "../../config/ThemeConfig"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import particlesOptions from "../../config/ParticlesConfig.json"
import { PageComponentsProps } from "../props/PageComponentsProps"
import SlideNotes from "../SlideNotes"
import PageSectionTemplate from "./PageSectionTemplate"
import FloatingActionButton from "../ui/FloatingActionButton"

const Page = ({
				  pageProps,
				  children
			  }: { pageProps: PageComponentsProps, children?: ReactNode }) => {

	const matches = useMediaQuery(ThemeConfig.breakpoints.up("md"))
	// @ts-ignore
	const particlesInit = async (engine) => {
		await loadFull(engine)
	}
	const particlesOptionsCopy = { ...particlesOptions }
	if (pageProps.href === "/") {
		particlesOptionsCopy.particles.opacity.value = 0.5
	} else {
		particlesOptionsCopy.particles.opacity.value = 0.3
	}
	if (matches) {
		particlesOptionsCopy.particles.size.value = 200
		particlesOptionsCopy.particles.size.anim.size_min = 50
		particlesOptionsCopy.particles.number.density.value_area = 2000
	} else {
		particlesOptionsCopy.particles.size.value = 100
		particlesOptionsCopy.particles.size.anim.size_min = 50
		particlesOptionsCopy.particles.number.density.value_area = 1250
	}

	const [ checked, setChecked ] = React.useState(false)
	useEffect(() => {
		setChecked(true)
	}, [])

	return (<ThemeProvider theme={ThemeConfig}>
		{/*// @ts-ignore*/}
		<Particles init={particlesInit} options={particlesOptionsCopy}
				   style={{
					   position: "fixed",
					   filter  : ThemeConfig.particles.filter
				   }}/>
		<ResponsiveTopBar page={pageProps}/>
		<Container component={Stack} spacing={2}
				   sx={{
					   paddingBottom: 3,
					   opacity      : 0.99,
					   marginTop    : "75px"
				   }}>
			{pageProps.data && <PageBreadcrumbs page={pageProps}/>}
			{pageProps.notes && <SlideNotes notesArray={pageProps.notes}/>}

			<Fade in={checked}
				  timeout={ThemeConfig.transitionDuration.page}>
				<Box>
					{pageProps.data && pageProps.data.map((section, index) => {
						return <PageSectionTemplate key={index} props={section}></PageSectionTemplate>
					})}
					{children}
				</Box>
			</Fade>
			<FloatingActionButton pageProps={pageProps}/>
		</Container>
	</ThemeProvider>)
}

export default Page
