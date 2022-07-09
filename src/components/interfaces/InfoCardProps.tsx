import * as React from "react"
import { SvgIconTypeMap } from "@mui/material"

export interface CardChipsProps {
	headerChips?: string[],
	contentChips?: string[],
	date?: string[],
	positions?: string[],
	languages?: string[],
	libraries?: string[],
	tools?: string[],
	awards?: string[],
}

export interface InfoCardProps {
	title: string,
	subtitle?: string,
	avatar?: SvgIconTypeMap["props"]["children"],
	content?: string | string[],
	chips?: CardChipsProps,
}