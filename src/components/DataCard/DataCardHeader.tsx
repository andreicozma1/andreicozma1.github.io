import * as React from "react"
import { Box, CardHeader } from "@mui/material"
import SmartChipBox from "../SmartChip/SmartChipBox"
import Theme from "../../config/Theme"
import { useIcon } from "../../Utils"

interface DataCardHeaderProps {
	headerChips?: string[]
	headerChipsAlign?: "left" | "right" | "center"
	title?: string
	subtitle?: string
	avatar?: string
}

export function DataCardHeader(props: DataCardHeaderProps) {
	let headerChipsAlign = props.headerChipsAlign || "right"
	const hasHeader = (props.title || props.subtitle || props.avatar)
	const titleTypographyProps = {
		fontWeight: Theme.card.fontWeight,
		fontSize  : Theme.card.titleFontSize
	}
	const subheaderTypographyProps = {
		fontSize: Theme.card.subheaderFontSize
	}
	const headerSx = {
		...(props.headerChips && {
			display: "flex"
		} || {}),
		background: `rgba(255, 255, 255, ${Theme.card.headerOpacity})`
	}
	const avatar = props.avatar && useIcon(props.avatar)

	const headerChips = <SmartChipBox text={props.headerChips}
									  align={headerChipsAlign}
									  containerSx={{
										  px: 1.5
									  }}/>

	return <Box sx={headerSx}>
		{headerChipsAlign === "left" && headerChips}
		{hasHeader && <CardHeader title={props.title}
                                  subheader={props.subtitle}
                                  titleTypographyProps={titleTypographyProps}
                                  subheaderTypographyProps={subheaderTypographyProps}
                                  avatar={avatar}
        />}
		{headerChipsAlign === "right" && headerChips}
	</Box>
}

