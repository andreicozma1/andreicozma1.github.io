/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import * as React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import MenuItem from "@mui/material/MenuItem"
import HeaderAvatar from "../avatars/HeaderAvatar"
import { pagesConfig } from "../../config/PagesConfig"
import { PageComponentsProps } from "../props/PageComponentsProps"
import { Button, IconButton, Link } from "gatsby-theme-material-ui"
import { AppBar, Slide, Stack, Toolbar } from "@mui/material"
import ThemeConfig from "../../config/ThemeConfig"
import IconsConfig from "../../config/IconsConfig"

const ResponsiveAppBar = ({ page }: { page: PageComponentsProps }) => {
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
		return Object.entries(pagesConfig).filter(([ , info ]) => isDev || !info.hidden)
	}

	// when the component is mounted set checked to true
	React.useEffect(() => {
		setChecked(true)
	}, [])

	return <Slide
		in={checked}
		timeout={ThemeConfig.transitionDuration.topbar}
		direction="down">

		<AppBar position="fixed" sx={{ opacity: ThemeConfig.topbar.opacity }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Box sx={{
						flexGrow: 0,
						display : {
							xs: "flex",
							md: "none"
						}
					}}>
						<IconButton
							size="large"
							aria-label="Navigation Menu"
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
								return <MenuItem key={title} onClick={handleCloseNavMenu} component={Link}
												 to={info.href}>
									<Typography
										textAlign="center"
										// underlined if current page
										sx={{
											opacity: info.hidden ? ThemeConfig.topbar.hiddenOpacity
												: 1, ...(page.href === info.href
												? { fontWeight: ThemeConfig.topbar.selectedFontWeight } : {})
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
							xs: "none",
							md: "flex" // align right
						}
					}}
						 component={Stack}
						 direction="row"
						 spacing={ThemeConfig.topbar.spacing}
					>
						{/*// if dev mode show hidden pages in menu*/}
						{filterPages().map(([ title, info ]) => {
							// @ts-ignore
							const icon = IconsConfig[info.icon]
							return <Button
								key={title}
								onClick={handleCloseNavMenu}
								href={info.href}
								startIcon={icon}
								variant={page.href === info.href ? "contained" : "outlined"}
								color="secondary"
								sx={{
									color  : "white", // underlined if current page
									opacity: info.hidden ? ThemeConfig.topbar.hiddenOpacity
										: 1, ...(page.href === info.href ? {
										fontWeight: ThemeConfig.topbar.selectedFontWeight
									} : {})
								}}
							>
								{title}
							</Button>
						})}
					</Box>
					<HeaderAvatar variant="md"/>

				</Toolbar>
			</Container>
		</AppBar>
	</Slide>
}
export default ResponsiveAppBar
