import { Avatar, Box, styled, Zoom } from "@mui/material"
import * as React from "react"
import { useEffect } from "react"

const StyledAvatar = styled(Avatar)(({ theme }) => ({
	width    : "20rem",
	height   : "20rem",
	alignSelf: "center",
	border   : `7px solid ${theme.palette.primary.main}`
}))

const HomeAvatar = () => {

	const [ checked, setChecked ] = React.useState(false)

	useEffect(() => {
		setChecked(true)
	}, [])

	return <>
		<Box style={{
			position : "absolute",
			top      : "50%",
			left     : "50%",
			transform: "translate(-50%, -50%)"
		}}>
			<Zoom in={checked}
				  timeout={1000}>
				<StyledAvatar
					alt="Andrei Cozma"
					src="avatar_alt.jpg"
				/>
			</Zoom>
		</Box>
	</>
}

export default HomeAvatar