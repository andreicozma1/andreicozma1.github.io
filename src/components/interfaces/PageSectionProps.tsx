import { AlertColor } from "@mui/material"
import * as React from "react"

export interface PageSectionProps {
	title: string,
	note?: string,
	noteSeverity?: AlertColor,
	layout: React.ComponentType<any>,
	itemComponent: React.ComponentType<any>,
	items: object[],
	spacing?: number
	md?: number
}