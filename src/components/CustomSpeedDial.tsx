import * as React from "react"
import { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import SpeedDial from "@mui/material/SpeedDial"
import SpeedDialAction from "@mui/material/SpeedDialAction"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"

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

export default function CustomSpeedDial() {

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

	return (<Box sx={{
		transform: "translateZ(0px)",
		flexGrow : 1,
		position : "fixed",
		bottom   : "4%",
		right    : "4%"
	}}>

		<SpeedDial
			ariaLabel="SpeedDial basic example"
			sx={{
				position: "absolute",
				bottom  : 16,
				right   : 16
			}}
			icon={isTop ? <ArrowDownwardIcon/> : <ArrowUpwardIcon/>}
		>
			{actions.map((action) => (<SpeedDialAction
				icon={action.icon}
				tooltipTitle={action.name}
				onClick={() => {
					window.open(action.url, "_blank")
				}}
			/>))}

		</SpeedDial>
	</Box>)
}