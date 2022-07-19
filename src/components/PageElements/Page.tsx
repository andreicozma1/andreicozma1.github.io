import { Box, Container, Fade, Stack, ThemeProvider, useMediaQuery } from "@mui/material"
import ResponsiveTopBar from "../Navigation/TopBar"
import * as React from "react"
import { ReactNode, useEffect, useState } from "react"
import PageBreadcrumbs from "../Navigation/PageBreadcrumbs"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import particlesOptions from "../../data/particles.json"
import SlideNotes from "../UIElement/SlideNotes"
import PageSectionResponsive from "./PageSectionResponsive"
import FloatingActionButton from "../Navigation/FloatingActionButton"
import { Provider } from "react-redux"
import PopupCard from "../UIElement/PopupCard"
import Theme from "../../config/Theme"
import { store } from "../../config/Main"
import { TemplatePageProps } from "../TemplatedDataProps"

interface PageProps {
	pageProps: TemplatePageProps,
	children?: ReactNode
}

const Page = (props: PageProps) => {

	const matches = useMediaQuery(Theme.breakpoints.up("md"))
	// @ts-ignore
	const particlesInit = async (engine) => {
		await loadFull(engine)
	}
	const particlesOptionsCopy = { ...particlesOptions }
	if (props.pageProps.href === "/") {
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

	const [ transitionDone, setTransitionDone ] = useState(false)
	useEffect(() => {
		setTransitionDone(true)
	}, [])

	return (<ThemeProvider theme={Theme}>
		{/*// @ts-ignore*/}
		<Particles init={particlesInit} options={particlesOptionsCopy}
				   style={{
					   position: "fixed",
					   filter  : Theme.particles.filter
				   }}/>
		<ResponsiveTopBar page={props.pageProps}/>

		<Provider store={store}>
			<Container component={Stack} spacing={2}
					   sx={{
						   paddingBottom: 3,
						   opacity      : 0.99,
						   marginTop    : "75px"
					   }}>
				{props.pageProps.sections && <PageBreadcrumbs page={props.pageProps}/>}
				{props.pageProps.notes && <SlideNotes notesArray={props.pageProps.notes}/>}

				<Fade in={transitionDone}
					  timeout={Theme.transitionDuration.page}>
					<Box>
						{props.pageProps.sections && props.pageProps.sections.map((section, index) => {
							return <PageSectionResponsive key={index} props={section}></PageSectionResponsive>
						})}
						{props.children}
					</Box>
				</Fade>
				<FloatingActionButton pageProps={props.pageProps}/>
			</Container>
			<PopupCard/>
		</Provider>
	</ThemeProvider>)
}

export default Page
