import { ChipProps, StackProps } from "@mui/material"

export interface ChipsProps {
	text: string | string[],
	defaultColor?: ChipProps["color"],
	defaultVariant?: ChipProps["variant"],
	direction?: StackProps["direction"],
	sx?: object
}