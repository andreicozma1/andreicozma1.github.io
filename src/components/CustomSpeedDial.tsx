/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import * as React from "react"
import Box from "@mui/material/Box"
import SpeedDial from "@mui/material/SpeedDial"
import SpeedDialAction from "@mui/material/SpeedDialAction"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import { Backdrop, SpeedDialIcon } from "@mui/material"
import { PageProps } from "./interfaces/PageProps"
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded"
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded"

const actions = [
	{
		icon: <LinkedInIcon/>,
		name: "LinkedIn",
		url : "https://www.linkedin.com/in/andreicozma1/"
	}, {
		icon: <GitHubIcon/>,
		name: "GitHub",
		url : "https://github.com/andreicozma1"
	}
]

export default function CustomSpeedDial({ pageProps }: { pageProps: PageProps }) {
	const [ open, setOpen ] = React.useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	const scrollToTop = () => {
		window.scrollTo({
			top     : 0,
			behavior: "smooth"
		})
	}

	const scrollToBottom = () => {
		window.scrollTo({
			top     : document.body.scrollHeight,
			behavior: "smooth"
		})
	}

	const gotoPage = (url: string | URL | undefined) => {
		setOpen(false)
		window.open(url, "_blank")
	}

	const permActions = [
		{
			icon  : <KeyboardArrowDownRoundedIcon/>,
			name  : "Bottom",
			action: () => {
				scrollToBottom()
				setOpen(false)
			}
		}, {
			icon  : <KeyboardArrowUpRoundedIcon/>,
			name  : "Top",
			action: () => {
				scrollToTop()
				setOpen(false)
			}
		}
	]

	return (<>
		<Backdrop open={open}/>

		<Box sx={{
			position: "fixed",
			bottom  : "5%",
			right   : "5%"
		}}>
			<SpeedDial
				ariaLabel="mySpeedDial"
				onClose={handleClose}
				onOpen={handleOpen}
				open={open}
				icon={<SpeedDialIcon/>}>

				{/*{props.sections && props.sections.map((section, index) => {*/}
				{/*	const icon = section.icon ? section.icon : <NavigateBeforeIcon/>*/}
				{/*	return <SpeedDialAction*/}
				{/*		key={index}*/}
				{/*		icon={icon}*/}
				{/*		tooltipTitle={section.title}*/}
				{/*		tooltipOpen*/}
				{/*		onClick={() => {*/}
				{/*			window.location.href = "#" + section.title*/}
				{/*		}}/>*/}
				{/*})}*/}
				{pageProps.href !== "/" && permActions.map((action) => (<SpeedDialAction
					key={action.name}
					icon={action.icon}
					tooltipTitle={action.name}
					tooltipOpen
					onClick={action.action}
				/>))}

				{actions.map((action) => (<SpeedDialAction
					key={action.name}
					icon={action.icon}
					tooltipTitle={action.name}
					tooltipOpen
					onClick={() => gotoPage(action.url)}
				/>))}
			</SpeedDial>
		</Box>
	</>)
}