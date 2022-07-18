/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/

import * as React from "react"
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar"
import { Tooltip } from "@mui/material"
import { IconButton, Link } from "gatsby-theme-material-ui"

const HeaderAvatar = ({ variant }: { variant: string }) => {

	let display
	if (variant === "xs") {
		display = {
			xs: "flex", md: "none"
		}
	} else {
		display = {
			xs: "none", md: "flex"
		}
	}

	return <>
		<Typography
			variant="h6"
			noWrap
			component="a"
			sx={{
				mx: 2, display: display, fontFamily: "monospace", flexGrow: variant === "xs" ? 1
					: 0, fontWeight: 700, letterSpacing: ".2rem", color: "inherit", textDecoration: "none"
			}}
		>
			Andrei Cozma
		</Typography>
		<Tooltip title="Home">
			<IconButton sx={{ p: 0 }}>
				<Link href="/">
					<Avatar alt="Andrei Cozma" src="/avatar.jpg" sx={{
						display: display, mr: 3
					}}/>
				</Link>
			</IconButton>
		</Tooltip>
	</>
}

export default HeaderAvatar