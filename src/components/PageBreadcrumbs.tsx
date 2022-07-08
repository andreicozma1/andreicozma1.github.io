import { Breadcrumbs, Chip, emphasize, styled } from "@mui/material"
import * as React from "react"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import theme from "../config/theme"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"
import { Page } from "../config/pages"

export const StyledBreadcrumb = styled(Chip)(({ theme }) => {
	const backgroundColor = theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[800]
	return {
		backgroundColor,
		height            : theme.spacing(4),
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

export function handleClick(event: React.MouseEvent<Element, MouseEvent>) {
	event.preventDefault()
	console.info("You clicked a breadcrumb.")
}

const PageBreadcrumbs = ({ page }: { page: Page }) => {
	return (<Breadcrumbs aria-label="breadcrumb"
						 separator={<NavigateNextIcon fontSize="small"/>}
						 sx={{
							 paddingTop: theme.spacing(2)
						 }}>
		<StyledBreadcrumb
			component="a"
			label={page.href}
			href="#"
			icon={page.icon}
		/>
		<StyledBreadcrumb
			label="#"
			deleteIcon={<ExpandMoreIcon/>}
			onDelete={handleClick}
		/>
	</Breadcrumbs>)
}

export default PageBreadcrumbs
