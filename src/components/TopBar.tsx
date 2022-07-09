import * as React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import MenuItem from "@mui/material/MenuItem"
import HeaderAvatar from "./avatars/HeaderAvatar"
import { pages } from "../config/pages"
import { PageProps } from "./interfaces/PageProps"
import { Button, IconButton } from "gatsby-theme-material-ui"
import { AppBar, Slide, Stack, Toolbar } from "@mui/material"
import theme from "../config/theme"

const ResponsiveAppBar = ({ page }: { page: PageProps }) => {
	const [ anchorElNav, setAnchorElNav ] = React.useState<null | HTMLElement>(null)

	const [ checked, setChecked ] = React.useState(false)
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

	// when the component is mounted set checked to true
	React.useEffect(() => {
		setChecked(true)
	}, [])

	return <Slide
		in={checked}
		timeout={theme.transitionDuration.topbar}
		direction="down">

		<AppBar position="static" sx={{ opacity: theme.topbar.opacity }}>

			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<HeaderAvatar variant="md"/>
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
												? theme.topbar.hiddenOpacity
												: 1, ...(page.href === info.href
												? { fontWeight: theme.topbar.selectedFontWeight }
												: {})
										}}
									>{title}</Typography>
								</MenuItem>
							})}
						</Menu>
					</Box>
					<HeaderAvatar variant="xs"/>

					<Box sx={{
						flexGrow: 1,
						display : {
							xs            : "none",
							md            : "flex", // align right
							justifyContent: "flex-end"
						}
					}}
						 component={Stack}
						 direction="row"
						 spacing={theme.topbar.spacing}
					>
						{/*// if dev mode show hidden pages in menu*/}
						{filterPages().map(([ title, info ]) => {
							return <Button
								key={title}
								onClick={handleCloseNavMenu}
								href={info.href}
								startIcon={info.icon}
								variant={page.href === info.href
									? "contained"
									: "outlined"}
								color="secondary"
								sx={{
									color  : "white", // underlined if current page
									opacity: info.hidden
										? theme.topbar.hiddenOpacity
										: 1, ...(page.href === info.href
										? {
											fontWeight: theme.topbar.selectedFontWeight
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
		</AppBar>
	</Slide>
}
export default ResponsiveAppBar
