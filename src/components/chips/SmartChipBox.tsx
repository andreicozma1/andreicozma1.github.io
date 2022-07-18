/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/

import { Box, ChipProps } from "@mui/material"
import * as React from "react"
import SmartChip from "./SmartChip"

interface SmartChipBoxProps {
	text: string | string[],
	defaultColor?: ChipProps["color"],
	defaultVariant?: ChipProps["variant"],
	defaultSize?: ChipProps["size"],
	containerSx?: object,
	align?: "left" | "right" | "center"
}

const SmartChipBox = ({ text, defaultColor, defaultVariant, defaultSize, containerSx, align }: SmartChipBoxProps) => {

	let cSx = {
		my: "auto", ...containerSx
	}
	switch (align) {
		case "left":
			cSx = {
				...cSx, mr: "auto", ml: 0
			}
			break
		case "right":
			cSx = {
				...cSx, ml: "auto", mr: 0
			}
			break
		case "center":
			cSx = {
				...cSx, mx: "auto"
			}
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
