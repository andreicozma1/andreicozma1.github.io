import { Box, Container, Fade, Stack, ThemeProvider, useMediaQuery } from "@mui/material"
import ResponsiveTopBar from "../ui/TopBar"
import * as React from "react"
import { ReactNode, useEffect } from "react"
import PageBreadcrumbs from "../PageBreadcrumbs"
import ThemeConfig from "../../config/ThemeConfig"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import particlesOptions from "../../config/data/particlesConfig.json"
import { PageProps } from "../props/PageComponentsProps"
import SlideNotes from "../SlideNotes"
import SectionResponsive from "./SectionResponsive"
import FloatingActionButton from "../ui/FloatingActionButton"
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import cardReducer from "../../reducers/selectedCard"
import BackdropCard from "../cards/BackdropCard"

const store = configureStore({
	reducer: {
		backdropCard: cardReducer
	}
})

const Page = ({ pageProps, children }: { pageProps: PageProps, children?: ReactNode }) => {

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
					   position: "fixed", filter: ThemeConfig.particles.filter
				   }}/>
		<ResponsiveTopBar page={pageProps}/>

		<Provider store={store}>
			<Container component={Stack} spacing={2}
					   sx={{
						   paddingBottom: 3, opacity: 0.99, marginTop: "75px"
					   }}>
				{pageProps.sections && <PageBreadcrumbs page={pageProps}/>}
				{pageProps.notes && <SlideNotes notesArray={pageProps.notes}/>}

				<Fade in={checked}
					  timeout={ThemeConfig.transitionDuration.page}>
					<Box>
						{pageProps.sections && pageProps.sections.map((section, index) => {
							return <SectionResponsive key={index} props={section}></SectionResponsive>
						})}
						{children}
					</Box>
				</Fade>
				<FloatingActionButton pageProps={pageProps}/>
			</Container>
			<BackdropCard/>
		</Provider>
	</ThemeProvider>)
}

export default Page
