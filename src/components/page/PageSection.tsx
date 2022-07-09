import * as React from "react"
import { Box, Grid, Stack, Typography } from "@mui/material"
import theme from "../../config/theme"
import { PageSectionProps } from "../interfaces/PageSectionProps"
import SlideNotes from "../SlideNotes"
import { InfoCardProps } from "../interfaces/InfoCardProps"

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
				{props.items.map((itemProps: InfoCardProps, index: number) => {
					return <Grid item xs={12} md={md} key={index}>
						<props.itemComponent
							title={itemProps.title}
							subtitle={itemProps.subtitle}
							content={itemProps.content}
							avatar={itemProps.avatar}
							headerChips={itemProps.headerChips}
							contentChips={itemProps.contentChips}
						/>
					</Grid>
				})}
			</Grid>
		</Box>
	</Stack>
}

export default PageSection
