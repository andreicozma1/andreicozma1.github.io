import { Box, Container, Fade, Stack, ThemeProvider, Tooltip, Typography, useMediaQuery } from "@mui/material"
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
import { formatBuildDate, useSiteMetadata } from "../../Utils"

interface PageProps {
	pageProps: TemplatePageProps,
	children?: ReactNode
}

const PageFooter = () => {
	const { buildTime, commitSha } = useSiteMetadata()
	const formattedDate = formatBuildDate(buildTime)

	return (
		<Box
			component="footer"
			sx={{
				textAlign: "center",
				py: 2,
				mt: "auto",
				pt: 4,
				opacity: 0.6,
			}}
		>
			<Tooltip title={`Commit: ${commitSha}`} arrow>
				<Typography
					variant="caption"
					sx={{
						cursor: "default",
						"&:hover": { opacity: 0.8 }
					}}
				>
					Last updated {formattedDate}
				</Typography>
			</Tooltip>
		</Box>
	)
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
			<Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
				<Container component={Stack} spacing={2}
						   sx={{
							   paddingBottom: 3,
							   opacity      : 0.99,
							   marginTop    : "75px",
							   flexGrow: 1,
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
				<PageFooter />
			</Box>
			<PopupCard/>
		</Provider>
	</ThemeProvider>)
}

export default Page
