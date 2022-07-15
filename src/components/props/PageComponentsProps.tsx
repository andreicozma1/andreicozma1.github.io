/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/

import React from "react"
import { DataCardProps } from "./DataCardComponentsProps"
import { NoteProps } from "./UIComponentsProps"

export interface PageProps {
	href: string,
	icon: string,
	sections?: Array<PageSectionProps>,
	notes?: Array<NoteProps>,
	hidden?: boolean,
}

export interface PageSectionProps {
	title: string,
	items: Array<DataCardProps>,
	icon?: string,
	notes?: Array<NoteProps>,
	variant?: string,
}


