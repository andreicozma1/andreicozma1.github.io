/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/

import React from "react"
import { DataCardProps } from "./DataCardComponentsProps"
import { NoteProps } from "./UIComponentsProps"

export interface PageComponentsProps {
	href: string,
	icon: React.ReactElement,
	data?: Array<PageSectionProps>,
	notes?: Array<NoteProps>,
	hidden?: boolean,
}

export interface PageSectionProps {
	title: string,
	items: Array<DataCardProps>,
	icon?: string,
	notes?: Array<NoteProps>,
	variant?: "grid6" | "grid12" | "timeline",
}

export class PageElement extends React.Component<any, any> implements PageSectionProps {
	title: string
	notes?: Array<NoteProps>

	constructor(props: PageSectionProps) {
		super(props)
		this.title = props.title
		this.notes = props.notes
	}
}

