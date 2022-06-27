import * as React from "react"
import { Stack, Typography } from "@mui/material"
import InfoCard, { InfoCardData } from "./InfoCard"

export interface CardListParams {
	title: string,
    component: React.ComponentType<any>,
	items: object[],
	spacing?: number
}

const SectionCardList = ({ section }: { section: CardListParams }) => {
	return (
		<Stack spacing={section.spacing === undefined ? 1.5 : section.spacing}>
			<Typography variant="h5" fontWeight="medium">{section.title}</Typography>
			{section.items.map((item: object, index: number) => {
				return <section.component key={index} {...item as InfoCardData}></section.component>
			})}
		</Stack>
	)
}

export default SectionCardList
