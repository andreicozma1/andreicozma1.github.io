import * as React from "react"
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar"
import { Tooltip } from "@mui/material"
import { IconButton, Link } from "gatsby-theme-material-ui"

const settings = [ "LinkedIn", "GitHub", "Source Code" ]

const HeaderAvatar = ({ variant }: { variant: string }) => {

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

	const [ anchorElUser, setAnchorElUser ] = React.useState(null)
	const handleOpenUserMenu = (event: any) => {
		setAnchorElUser(event.currentTarget)
	}
	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}

	return <>
		<Typography
			variant="h6"
			noWrap
			component="a"
			sx={{
				mr            : 2,
				display       : display,
				fontFamily    : "monospace",
				flexGrow      : variant === "xs" ? 1 : 0,
				fontWeight    : 700,
				letterSpacing : ".2rem",
				color         : "inherit",
				textDecoration: "none"
			}}
		>
			Andrei Cozma
		</Typography>
		<Tooltip title="Home">
			<IconButton onClick={handleOpenUserMenu}  sx={{ p: 0 }}>
				<Link href="/">
					<Avatar  alt="Andrei Cozma" src="/avatar.jpg" sx={{
						display: display,
						mr     : 3
					}}/>
				</Link>
			</IconButton>
		</Tooltip>
		{/*<Menu*/}
		{/*	sx={{ mt: "45px" }}*/}
		{/*	id="menu-appbar"*/}
		{/*	anchorEl={anchorElUser}*/}
		{/*	anchorOrigin={{*/}
		{/*		vertical  : "top",*/}
		{/*		horizontal: "right"*/}
		{/*	}}*/}
		{/*	keepMounted*/}
		{/*	transformOrigin={{*/}
		{/*		vertical  : "top",*/}
		{/*		horizontal: "right"*/}
		{/*	}}*/}
		{/*	open={Boolean(anchorElUser)}*/}
		{/*	onClose={handleCloseUserMenu}*/}
		{/*>*/}
		{/*	{settings.map((setting) => (<MenuItem key={setting} onClick={handleCloseUserMenu}>*/}
		{/*		<Typography textAlign="center">{setting}</Typography>*/}
		{/*	</MenuItem>))}*/}
		{/*</Menu>*/}
	</>
}

export default HeaderAvatar