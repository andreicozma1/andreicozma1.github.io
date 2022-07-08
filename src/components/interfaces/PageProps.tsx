import React from "react"
import { NoteProps } from "./NoteProps"
import { PageSectionProps } from "./PageSectionProps"

export interface PageProps {
	href: string,
	icon: React.ReactElement,
	content?: Array<PageSectionProps>,
	notes?: Array<NoteProps>,
	hidden?: boolean
}