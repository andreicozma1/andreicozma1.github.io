/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import * as React from "react"
import { useEffect } from "react"
import Box from "@mui/material/Box"
import SpeedDial from "@mui/material/SpeedDial"
import SpeedDialAction from "@mui/material/SpeedDialAction"
import { Backdrop, Slide, SpeedDialIcon } from "@mui/material"
import { PageComponentsProps } from "../props/PageComponentsProps"
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded"
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded"
import FloatingActionButtonConfig from "../../config/data/FloatingActionButtonConfig"
import LinkIcon from "@mui/icons-material/Link"
import ThemeConfig from "../../config/ThemeConfig"

export default function FloatingActionButton({ pageProps }: { pageProps: PageComponentsProps }) {
	const [ open, setOpen ] = React.useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	const [ animationDone, setAnimationDone ] = React.useState(false)

	useEffect(() => {
		setAnimationDone(true)
	}, [])

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
		<Slide in={animationDone}
			   direction="up"
			   timeout={ThemeConfig.transitionDuration.fab}>
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

					{pageProps.href !== "/" && permActions.map((action) => (<SpeedDialAction
						key={action.name}
						icon={action.icon}
						tooltipTitle={action.name}
						tooltipOpen
						onClick={action.action}
					/>))}

					{FloatingActionButtonConfig.map((action) => (<SpeedDialAction
						key={action.name}
						icon={action.icon}
						tooltipTitle={action.name}
						tooltipOpen
						onClick={() => gotoPage(action.url)}
					/>))}
				</SpeedDial>
			</Box>
		</Slide>
	</>)
}