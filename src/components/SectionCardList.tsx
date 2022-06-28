import * as React from "react"
import { Alert, Grid, Stack, Typography } from "@mui/material"
import theme from "../config/theme"
import { InfoCardProps } from "./InfoCardProps"

export interface CardListParams {
	title: string,
	note?: string,
	noteSeverity?: "info" | "success" | "warning" | "error",
	layout: React.ComponentType<any>,
	itemComponent: React.ComponentType<any>,
	items: object[],
	spacing?: number
	md?: number
}

const SectionCardList = ({ section }: { section: CardListParams }) => {
	const defaultSpacing = theme.spacing(1)
	const headerVariant = "h5"
	const headerFontWeight = "medium"
	const md = section.md || 6

	return (
		<Stack spacing={section.spacing === undefined ? defaultSpacing : section.spacing}>
			<Typography variant={headerVariant}
						fontWeight={headerFontWeight}
						sx={{ my: defaultSpacing }}>
				{section.title}
			</Typography>
			{section.note && <Alert severity={section.noteSeverity}>{section.note}</Alert>}
			<Grid container spacing={2}
				  justifyContent="space-around">
				{section.items.map((item: object, index: number) => {
					return <Grid item xs={12} md={md}>
						<section.itemComponent key={index} {...item as InfoCardProps}></section.itemComponent>
					</Grid>
				})}
			</Grid>
		</Stack>
	)
}

export default SectionCardList
