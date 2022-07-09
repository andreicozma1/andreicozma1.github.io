import * as React from "react"
import { NoteProps } from "./NoteProps"

export interface PageSectionProps {
	title: string,
	notes?: Array<NoteProps>,
	layout: React.ComponentType<any>,
	itemComponent: React.ComponentType<any>,
	items: object[],
	variant?: "grid6" | "grid12" | "timeline",
}