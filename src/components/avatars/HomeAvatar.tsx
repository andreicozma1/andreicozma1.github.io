import { Avatar, Box, styled, Zoom } from "@mui/material"
import * as React from "react"
import { useEffect } from "react"
import theme from "../../config/theme"

const StyledAvatar = styled(Avatar)(({ theme }) => ({
	width : theme.avatar.size, height: theme.avatar.size, alignSelf: "center",
	border: `${theme.avatar.borderSize} solid ${theme.palette.primary.main}`
}))

const HomeAvatar = () => {

	const [ checked, setChecked ] = React.useState(false)

	useEffect(() => {
		setChecked(true)
	}, [])

	return <>
		<Box style={{
			position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"
		}}>
			<Zoom in={checked}
				  timeout={theme.transitionDuration.avatar}>
				<StyledAvatar
					alt="Andrei Cozma"
					src="avatar_alt.jpg"
				/>
			</Zoom>
		</Box>
	</>
}

export default HomeAvatar