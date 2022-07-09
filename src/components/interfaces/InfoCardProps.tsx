import * as React from "react"
import { SvgIconTypeMap } from "@mui/material"

export interface InfoCardProps {
	title: string,
	subtitle?: string,
	avatar: SvgIconTypeMap["props"]["children"],
	headerChips?: string | string[],
	contentChips?: string | string[],
	content?: string | string[]
}