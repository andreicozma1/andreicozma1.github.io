/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/

import { Box, ChipProps } from "@mui/material"
import * as React from "react"
import SmartChip from "./SmartChip"

interface SmartChipBoxProps {
	text: string[] | undefined,
	defaultColor?: ChipProps["color"],
	defaultVariant?: ChipProps["variant"],
	defaultSize?: ChipProps["size"],
	containerSx?: object,
	align?: "left" | "right" | "center"
}

const SmartChipBox = (props: SmartChipBoxProps) => {

	if (props.text === undefined) return null

	let cSx = {
		my: "auto",
		mx: (props.align === "center") ? "auto" : "0",
		mr: (props.align === "right") ? "0" : "auto",
		ml: (props.align === "left") ? "0" : "auto", ...props.containerSx
	}
	return <Box sx={cSx}>
		{props.text.map((chipText, index) => {
			return <SmartChip key={index} text={chipText}
							  defaultColor={props.defaultColor} defaultVariant={props.defaultVariant}
							  defaultSize={props.defaultSize}
			/>
		})}
	</Box>
}

export default SmartChipBox
