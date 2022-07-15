/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/

import { AlertColor, ChipProps } from "@mui/material"

export interface SmartChipProps {
	text: string,
	defaultColor?: ChipProps["color"],
	defaultVariant?: ChipProps["variant"],
	defaultSize?: ChipProps["size"],
	store?: boolean
}

export interface NoteProps {
	text: string,
	severity?: AlertColor
}