/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import { Breadcrumbs, Chip, emphasize, Grid, Slide, styled } from "@mui/material"
import * as React from "react"
import { useEffect } from "react"
import ThemeConfig from "../../config/ThemeConfig"
import { PageProps } from "../props/PageComponentsProps"

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

	const scroll = (title: string) => {
		// replace commas with nothing
		// replace spaces with dashes
		// replace and signs with nothing
		title = title.replace(/,/g, "").replace(/&/g, "").replace(/  /g, " ").replace(/ /g, "-").toLowerCase()
		const section = document.querySelector("#" + title)
		if (section) section.scrollIntoView({
			behavior: "smooth",
			block   : "start"
		})
	}

	return <Slide in={animationDone}
				  direction="right"
				  timeout={ThemeConfig.transitionDuration.breadcrumb}>
		<Breadcrumbs aria-label="breadcrumb">
			<Grid container spacing={0.75}>
				{page.sections && page.sections.map((section) => {
					return <Grid item key={"#" + section.title}>
						<StyledBreadcrumb label={section.title}
										  onClick={() => {
											  scroll(section.title)
										  }}/>
					</Grid>
				})}
			</Grid>
		</Breadcrumbs>
	</Slide>
}

export default PageBreadcrumbs
