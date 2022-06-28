import * as React from "react"
import { Stack, Typography } from "@mui/material"
import { InfoCardData } from "./InfoCard"

export interface CardListParams {
	title: string,
	layout: React.ComponentType<any>,
	component: React.ComponentType<any>,
	items: object[],
	spacing?: number
}

const SectionCardList = ({ section }: { section: CardListParams }) => {
	const defaultSpacing = 1.5
	const headerVariant = "h5"
	const headerFontWeight = "medium"
	return (
		<Stack spacing={section.spacing === undefined ? defaultSpacing : section.spacing}>
			<Typography variant={headerVariant}
						fontWeight={headerFontWeight}
						sx={{ mb: defaultSpacing }}>
				{section.title}
			</Typography>
			{section.items.map((item: object, index: number) => {
				return <section.component key={index} {...item as InfoCardData}></section.component>
			})}
		</Stack>
	)
}

export default SectionCardList
