import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import MenuItem from "@mui/material/MenuItem"
import Logo from "./Logo"
import { pages } from "../config/pages"
import { PageProps } from "./interfaces/PageProps"
import { Button } from "gatsby-theme-material-ui"

const ResponsiveAppBar = ({ page }: { page: PageProps }) => {
	const [ anchorElNav, setAnchorElNav ] = React.useState<null | HTMLElement>(null)

	const isDev = process.env.NODE_ENV === "development"

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	const filterPages = () => {
		return Object.entries(pages).filter(([ title, info ]) => isDev || !info.hidden)
	}

	return (<AppBar position="static" sx={{ opacity: 0.99 }}>
		<Container maxWidth="xl">
			<Toolbar disableGutters>
				<Logo variant="md"/>

				<Box sx={{
					flexGrow: 1,
					display : {
						xs: "flex",
						md: "none"
					}
				}}>
					<IconButton
						size="large"
						aria-label="account of current user"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						onClick={handleOpenNavMenu}
						color="inherit"
					>
						<MenuIcon/>
					</IconButton>
					<Menu
						id="menu-appbar"
						anchorEl={anchorElNav}
						anchorOrigin={{
							vertical  : "bottom",
							horizontal: "left"
						}}
						keepMounted
						transformOrigin={{
							vertical  : "top",
							horizontal: "left"
						}}
						open={Boolean(anchorElNav)}
						onClose={handleCloseNavMenu}
						sx={{
							display: {
								xs: "block",
								md: "none"
							}
						}}
					>
						{filterPages().map(([ title, info ]) => {
							return <MenuItem key={title} onClick={handleCloseNavMenu} href={info.href}>
								<Typography
									textAlign="center"
									// underlined if current page
									sx={{
										opacity: info.hidden
											? 0.5
											: 1, ...(page.href === info.href
											? { fontWeight: "medium" }
											: {})
									}}
								>{title}</Typography>
							</MenuItem>
						})}
					</Menu>
				</Box>
				<Logo variant="xs"/>

				<Box sx={{
					flexGrow: 1,
					display : {
						xs            : "none",
						md            : "flex", // align right
						justifyContent: "flex-end"
					}
				}}>
					{/*// if dev mode show hidden pages in menu*/}
					{filterPages().map(([ title, info ]) => {
						return <Button
							key={title}
							onClick={handleCloseNavMenu}
							href={info.href}
							startIcon={info.icon}
							variant="outlined"
							sx={{
								color  : "white", // underlined if current page
								opacity: info.hidden
									? 0.5
									: 1, ...(page.href === info.href
									? {
										textDecoration: "underline",
										fontWeight    : "bold"
									}
									: {})
							}}
						>
							{title}
						</Button>
					})}
				</Box>

			</Toolbar>
		</Container>
	</AppBar>)
}
export default ResponsiveAppBar
