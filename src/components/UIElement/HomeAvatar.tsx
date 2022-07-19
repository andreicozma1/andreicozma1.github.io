/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/

import { Avatar, Box, styled, Zoom } from "@mui/material"
import * as React from "react"
import { useEffect, useState } from "react"
import { Link } from "gatsby-theme-material-ui"

import Main from "../../config/Main"
import Theme from "../../config/Theme"

const StyledAvatar = styled(Avatar)(({ theme }) => ({
	width    : theme.avatar.size,
	height   : theme.avatar.size,
	alignSelf: "center",
	border   : `${theme.avatar.borderSize} solid ${theme.palette.primary.main}`
}))

const HomeAvatar = () => {

	const [ transitionDone, setTransitionDone ] = useState(false)

	useEffect(() => {
		setTransitionDone(true)
	}, [])

	return <Box style={{
		position : "absolute",
		top      : "50%",
		left     : "50%",
		transform: "translate(-50%, -50%)"
	}}>
		<Link href={Main.avatarHome.href}>
			<Zoom in={transitionDone} timeout={Theme.transitionDuration.avatar}>
				<StyledAvatar
					alt="Header Avatar"
					src={Main.avatarHome.src}
				/>
			</Zoom>
		</Link>
	</Box>
}

export default HomeAvatar