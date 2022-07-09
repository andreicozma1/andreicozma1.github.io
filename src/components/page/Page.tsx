import { Box, Container, Fade, Stack, ThemeProvider } from "@mui/material"
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
import PageSection from "./PageSection"

const Page = ({
				  data,
				  children
			  }: { data: PageProps, children?: ReactNode }) => {

	// @ts-ignore
	const particlesInit = async (engine) => {
		await loadFull(engine)
	}

	const [ checked, setChecked ] = React.useState(false)

	useEffect(() => {
		setChecked(true)
	}, [])

	return (<ThemeProvider theme={theme}>
		{/*// @ts-ignore*/}
		<Particles init={particlesInit} options={particlesOptions}
				   style={{
					   position: "fixed",
					   filter  : theme.particles.filter,
				   }}/>
		<ResponsiveTopBar page={data}/>
		<Container component={Stack} spacing={2} sx={{
			paddingBottom: theme.spacing(2),
			opacity      : 0.99,
		}}>
			{data.sections && <PageBreadcrumbs page={data}/>}
			{data.notes && <SlideNotes notesArray={data.notes}/>}

			<Fade in={checked}
				  timeout={theme.transitionDuration.page}>
				<Box>
					{data.sections && data.sections.map((section, index) => (
						<PageSection key={index} props={section}></PageSection>))}
					{children}
				</Box>
			</Fade>
		</Container>
	</ThemeProvider>)
}

export default Page