import { Container, Stack, ThemeProvider } from "@mui/material"
import ResponsiveTopBar from "../TopBar"
import * as React from "react"
import { ReactNode } from "react"
import PageBreadcrumbs from "./PageBreadcrumbs"
import theme from "../../config/theme"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import particlesOptions from "../../config/particles.json"
import { PageProps } from "../interfaces/PageProps"
import Notes from "../Notes"

const Page = ({
				  data,
				  children
			  }: { data: PageProps, children?: ReactNode }) => {

	// @ts-ignore
	const particlesInit = async (engine) => {
		await loadFull(engine)
	}

	const [ checked, setChecked ] = React.useState(false)

	return (<ThemeProvider theme={theme}>
		{/*// @ts-ignore*/}
		<Particles init={particlesInit} options={particlesOptions}
				   style={{
					   position: "fixed",
					   filter  : "blur(15px)"
				   }}/>
		<ResponsiveTopBar page={data}/>
		<Container component={Stack} spacing={2} sx={{
			paddingBottom: theme.spacing(4),
			opacity      : 0.99
		}}>
			{data.sections && <PageBreadcrumbs page={data}/>}
			{data.notes && <Notes notesArray={data.notes}/>}
			{data.sections && data.sections.map((section, index) => (
				<section.layout key={index} props={section}></section.layout>))}
			{children}
		</Container>
	</ThemeProvider>)
}

export default Page
