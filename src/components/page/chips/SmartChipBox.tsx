import { Box, ChipProps } from "@mui/material"
import * as React from "react"
import SmartChip from "./SmartChip"

interface SmartChipBoxProps {
	text: string | string[],
	defaultColor?: ChipProps["color"],
	defaultVariant?: ChipProps["variant"],
	defaultSize?: ChipProps["size"],
	containerSx?: object,
}

const SmartChipBox = ({
						  text, defaultColor, defaultVariant, defaultSize, containerSx
					  }: SmartChipBoxProps) => {

	const cSx = {
		ml: "auto", my: "auto", ...containerSx
	}

	return <Box sx={cSx}>
		{typeof text === "string" ? <SmartChip text={text}
											   defaultColor={defaultColor} defaultVariant={defaultVariant}
		/> : text.map((chipText, index) => {
			return <SmartChip key={index} text={chipText}
							  defaultColor={defaultColor} defaultVariant={defaultVariant}
							  defaultSize={defaultSize}
			/>
		})}
	</Box>
}

export default SmartChipBox
