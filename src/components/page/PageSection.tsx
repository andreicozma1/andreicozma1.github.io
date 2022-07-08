import * as React from "react"
import { Box, Grid, Stack, Typography } from "@mui/material"
import theme from "../../config/theme"
import { PageSectionProps } from "../interfaces/PageSectionProps"
import Notes from "../Notes"

const PageSection = ({ props }: { props: PageSectionProps }) => {
	const defaultSpacing = theme.spacing(1)
	const headerVariant = "h5"
	const headerFontWeight = "medium"
	const md = props.md || 6

	return <Stack spacing={props.spacing === undefined
		? defaultSpacing
		: props.spacing}>
		<Typography variant={headerVariant}
					fontWeight={headerFontWeight}
					sx={{
						my            : defaultSpacing,
						textDecoration: "underline"
					}}>
			{props.title}
		</Typography>
		{props.notes && <Notes notesArray={props.notes}/>}
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={2}
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
