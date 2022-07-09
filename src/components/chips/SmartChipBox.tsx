import { Box, ChipProps } from "@mui/material"
import * as React from "react"
import SmartChip from "./SmartChip"

const SmartChipBox = ({
				   text,
				   defaultColor,
				   defaultVariant,
				   containerSx
			   }: {
	text: string | string[], defaultColor?: ChipProps["color"], defaultVariant?: ChipProps["variant"], containerSx?: object
}) => {

	const cSx = {
		ml: "auto",
		my: "auto", ...containerSx
	}

	return <Box sx={cSx}>
		{typeof text === "string"
			? <SmartChip text={text}
						 defaultColor={defaultColor} defaultVariant={defaultVariant}/>
			: text.map((chipText, index) => {
				return <SmartChip key={index} text={chipText}
								  defaultColor={defaultColor} defaultVariant={defaultVariant}/>
			})}
	</Box>
}

export default SmartChipBox
