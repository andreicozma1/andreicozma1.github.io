import { Box, useMediaQuery } from "@mui/material"

import { Masonry } from "@mui/lab"
import { TemplateDataCardProps, TemplatePageSectionProps } from "../TemplatedDataProps"
import DataCardResponsive from "../DataCard/DataCardResponsive"
import * as React from "react"
import Theme from "../../config/Theme"

export const SectionMasonry = ({ props }: { props: TemplatePageSectionProps }) => {
	const matches = useMediaQuery(Theme.breakpoints.down("md"))

	return <Box sx={{ flexGrow: 1 }}>
		<Masonry columns={props.variant === "grid6" ? (matches ? 1 : 2) : 1}
				 spacing={Theme.section.itemSpacing}
				 sx={{
					 m: 0
				 }}>
			{props.items.map((itemProps: TemplateDataCardProps) => {
				return <DataCardResponsive key={itemProps.title} itemProps={itemProps}/>
			})}
		</Masonry>
	</Box>
}