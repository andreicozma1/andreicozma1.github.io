import * as React from "react"
import { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import SpeedDial from "@mui/material/SpeedDial"
import SpeedDialAction from "@mui/material/SpeedDialAction"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import { Backdrop } from "@mui/material"
import { PageProps } from "./interfaces/PageProps"

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

export default function CustomSpeedDial({ props }: { props: PageProps }) {

	const [ isTop, setIsTop ] = React.useState(true)

	const scrollToTop = () => {
		if (isTop) {
			window.scrollTo({
				top     : document.body.scrollHeight,
				behavior: "smooth"
			})
		} else {
			window.scrollTo({
				top     : 0,
				behavior: "smooth"
			})
		}

		setIsTop(!isTop)
	}
	const [ lastScrollPosition, setLastScrollPosition ] = useState(0)
	const [ scrollPosition, setScrollPosition ] = useState(0)
	const handleScroll = () => {
		const position = window.pageYOffset
		setScrollPosition(position)
		if (position > lastScrollPosition) {
			setIsTop(false)
			setLastScrollPosition(position)
		} else {
			setIsTop(true)
		}
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true })

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	const [ open, setOpen ] = React.useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (<>
		<Backdrop open={open}/>

		<Box onClick={scrollToTop}
			 sx={{
				 position: "fixed",
				 bottom  : "5%",
				 right   : "5%"
			 }}>
			<SpeedDial
				ariaLabel="mySpeedDial"
				onClose={handleClose}
				onOpen={handleOpen}
				open={open}
				icon={isTop ? <ArrowDownwardIcon/> : <ArrowUpwardIcon/>}>

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

				{actions.map((action) => (<SpeedDialAction
					icon={action.icon}
					tooltipTitle={action.name}
					tooltipOpen
					onClick={() => {
						window.open(action.url, "_blank")
					}}
				/>))}
			</SpeedDial>
		</Box>
	</>)
}