import React from "react"
import { NoteProps } from "./NoteProps"
import { PageSectionProps } from "./PageSectionProps"

export interface PageProps {
	href: string,
	icon: React.ReactElement,
	sections?: Array<PageSectionProps | JSX.Element>,
	notes?: Array<NoteProps>,
	hidden?: boolean
}