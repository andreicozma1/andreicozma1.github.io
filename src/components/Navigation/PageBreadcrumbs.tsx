/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import { Breadcrumbs, Chip, emphasize, Grid, Slide, styled } from "@mui/material"
import * as React from "react"
import { useEffect, useState } from "react"
import { scrollToAnchor } from "../../Utils"
import Theme from "../../config/Theme"
import { TemplatePageProps } from "../TemplatedDataProps"

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

const PageBreadcrumbs = ({ page }: { page: TemplatePageProps }) => {
	const [ transitionDone, setTransitionDone ] = useState(false)

	useEffect(() => {
		setTransitionDone(true)
	}, [])

	return <Slide in={transitionDone}
				  direction="right"
				  timeout={Theme.transitionDuration.breadcrumb}>
		<Breadcrumbs aria-label="breadcrumb">
			<Grid container spacing={0.75}>
				{page.sections && page.sections.map((section) => {
					return <Grid item key={section.title}>
						<StyledBreadcrumb label={section.title}
										  onClick={() => {
											  scrollToAnchor(section.title)
										  }}/>
					</Grid>
				})}
			</Grid>
		</Breadcrumbs>
	</Slide>
}

export default PageBreadcrumbs
