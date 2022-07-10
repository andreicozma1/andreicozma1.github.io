import { Box, Breadcrumbs, Chip, emphasize, Slide, Stack, styled } from "@mui/material"
import * as React from "react"
import { useEffect } from "react"
import theme from "../../config/theme"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"
import { PageProps } from "../interfaces/PageProps"
import { Link } from "gatsby-theme-material-ui"

export const StyledBreadcrumb = styled(Chip)(({ theme }) => {
	const backgroundColor = theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[800]
	return {
		backgroundColor,
		color             : theme.palette.text.primary,
		fontWeight        : theme.typography.fontWeightRegular,
		"&:hover, &:focus": {
			backgroundColor: emphasize(backgroundColor, 0.06)
		},
		"&:active"        : {
			boxShadow      : theme.shadows[1],
			backgroundColor: emphasize(backgroundColor, 0.12)
		}
	}
}) as typeof Chip // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

const PageBreadcrumbs = ({ page }: { page: PageProps }) => {
	const [ checked, setChecked ] = React.useState(false)

	const [ anchorElUser, setAnchorElUser ] = React.useState(null)
	const handleOpenUserMenu = (event: any) => {
		setAnchorElUser(event.currentTarget)
	}
	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}

	useEffect(() => {
		setChecked(true)
	}, [])

	let settings: string[] = []
	if (page.sections) {
		for (let section of page.sections) {
			settings.push(section.title)
		}
	}

	return <Slide in={checked}
				  direction="right"
				  timeout={theme.transitionDuration.breadcrumb}>
			<Breadcrumbs aria-label="breadcrumb"
						 sx={{
							 paddingTop: theme.spacing(2),
						 }}>
				<Stack spacing={0.5} direction="row">
					<StyledBreadcrumb
						component={Link}
						label={page.href}
						href="#"
						icon={page.icon}
					/>
					{/*<StyledBreadcrumb*/}
					{/*	label="#"*/}
					{/*	deleteIcon={<ExpandMoreIcon/>}*/}
					{/*	onDelete={handleOpenUserMenu}*/}
					{/*/>*/}
					{page.sections && page.sections.map((section) => {
						return <StyledBreadcrumb component={Link} label={section.title}
												 key={section.title} href={"#" + section.title}
						/>
					})}
				</Stack>

			</Breadcrumbs>
			{/*<Menu*/}
			{/*	sx={{ mt: "30px" }}*/}
			{/*	id="menu-appbar"*/}
			{/*	anchorEl={anchorElUser}*/}
			{/*	anchorOrigin={{*/}
			{/*		vertical  : "top",*/}
			{/*		horizontal: "center"*/}
			{/*	}}*/}
			{/*	keepMounted*/}
			{/*	transformOrigin={{*/}
			{/*		vertical  : "top",*/}
			{/*		horizontal: "center"*/}
			{/*	}}*/}
			{/*	open={Boolean(anchorElUser)}*/}
			{/*	onClose={handleCloseUserMenu}*/}
			{/*>*/}
			{/*	{settings.map((setting) => (<MenuItem key={setting} onClick={handleCloseUserMenu}>*/}
			{/*		<Typography textAlign="center" component={Link} underline="none"*/}
			{/*					href={"#" + setting}>{setting}</Typography>*/}
			{/*	</MenuItem>))}*/}
			{/*</Menu>*/}
	</Slide>
}

export default PageBreadcrumbs
