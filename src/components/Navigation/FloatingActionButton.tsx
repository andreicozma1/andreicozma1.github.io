/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import * as React from "react"
import { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import SpeedDial from "@mui/material/SpeedDial"
import SpeedDialAction from "@mui/material/SpeedDialAction"
import { Backdrop, Slide, SpeedDialIcon } from "@mui/material"
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded"
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded"
import LinkIcon from "@mui/icons-material/Link"

import links from "../../data/links.json"
import { gotoLink, scrollToBottom, scrollToTop, useIcon } from "../../Utils"
import Theme from "../../config/Theme"
import { TemplatePageProps } from "../TemplatedDataProps"

export default function FloatingActionButton({ pageProps }: { pageProps: TemplatePageProps }) {
	const [ animationDone, setAnimationDone ] = useState(false)
	const [ open, setOpen ] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	useEffect(() => {
		setAnimationDone(true)
	}, [])

	const actionsDefault = [
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
		<Slide in={animationDone}
			   direction="up"
			   timeout={Theme.transitionDuration.fab}>
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
					icon={<SpeedDialIcon icon={<LinkIcon/>}/>}>

					{pageProps.href !== "/" && actionsDefault.map((action) => (<SpeedDialAction
						key={action.name}
						icon={action.icon}
						tooltipTitle={action.name}
						tooltipOpen
						onClick={action.action}
					/>))}

					{Object.values(links).map((link) => {
						const icon = useIcon(link.icon)

						return (<SpeedDialAction
							key={link.name}
							icon={icon}
							tooltipTitle={link.name}
							tooltipOpen
							onClick={() => gotoLink(link)}
						/>)
					})}
				</SpeedDial>
			</Box>
		</Slide>
	</>)
}