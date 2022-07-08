import * as React from "react"
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar"

const Logo = ({ variant }: { variant: string }) => {

	let display
	if (variant === "xs") {
		display = {
			xs: "flex",
			md: "none"
		}
	} else {
		display = {
			xs: "none",
			md: "flex"
		}
	}

	return <>
		<Avatar alt="Andrei Cozma" src="icon-512x512.png" sx={{
			display: display,
			mr     : 3
		}}/>
		<Typography
			variant="h6"
			noWrap
			component="a"
			href="/"
			sx={{
				mr            : 2,
				display       : display,
				fontFamily    : "monospace",
				flexGrow      : variant === "xs"
					? 1
					: 0,
				fontWeight    : 700,
				letterSpacing : ".25rem",
				color         : "inherit",
				textDecoration: "none"
			}}
		>
			Andrei Cozma
		</Typography>
	</>
}

export default Logo