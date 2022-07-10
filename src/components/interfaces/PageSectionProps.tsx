import * as React from "react"
import { NoteProps } from "./NoteProps"
import { InfoCardProps } from "./InfoCardProps"

export interface PageSectionProps {
	title: string,
	icon? : React.ReactNode,
	notes?: Array<NoteProps>,
	items: Array<InfoCardProps>,
	variant?: "grid6" | "grid12" | "timeline",
}