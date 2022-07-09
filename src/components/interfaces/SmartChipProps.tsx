import { ChipProps } from "@mui/material"

export interface SmartChipProps {
	text: string,
	defaultColor?: ChipProps["color"],
	defaultVariant?: ChipProps["variant"],
}