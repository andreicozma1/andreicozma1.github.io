import * as React from "react"
import { Box, Grid, Stack, Typography } from "@mui/material"
import theme from "../../config/theme"
import { PageSectionProps } from "../interfaces/PageSectionProps"
import SlideNotes from "../SlideNotes"

const PageSection = ({ props }: { props: PageSectionProps }) => {
	const md = props.md || 6

	return <Stack spacing={theme.section.itemSpacing}
				  sx={{
					  my: theme.section.verticalMargin
				  }}>
		<Typography variant={theme.section.titleVariant}
					fontWeight={theme.section.titleFontWeight}
					sx={{
						textDecoration: "underline"
					}}>
			{props.title}
		</Typography>
		{props.notes && <SlideNotes notesArray={props.notes}/>}
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={theme.section.itemSpacing}
				  justifyContent="space-evenly"
				  alignItems="stretch">
				{props.items.map((itemProps, index) => {
					return <Grid item xs={12} md={md} key={index}>
						<props.itemComponent props={itemProps}></props.itemComponent>
					</Grid>
				})}
			</Grid>
		</Box>
	</Stack>
}

export default PageSection
