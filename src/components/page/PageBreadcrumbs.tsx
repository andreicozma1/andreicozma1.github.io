/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import { Breadcrumbs, Chip, emphasize, Grid, Slide, styled } from "@mui/material"
import * as React from "react"
import { useEffect } from "react"
import theme from "../../config/theme"
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
	const [ animationDone, setAnimationDone ] = React.useState(false)

	useEffect(() => {
		setAnimationDone(true)
	}, [])

	let settings: string[] = []
	if (page.sections) {
		for (let section of page.sections) {
			settings.push(section.title)
		}
	}

	return <Slide in={animationDone}
				  direction="right"
				  timeout={theme.transitionDuration.breadcrumb}>
		<Breadcrumbs aria-label="breadcrumb">
			<Grid container spacing={0.75}>
				{page.sections && page.sections.map((section) => {
					return section.title && <Grid item key={"#" + section.title}>
                        <StyledBreadcrumb component={Link} label={section.title}
                                          href={"#" + section.title}/>
                    </Grid>
				})}
			</Grid>
		</Breadcrumbs>
	</Slide>
}

export default PageBreadcrumbs
