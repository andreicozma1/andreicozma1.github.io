/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/

import { NoteProps } from "./UIElement/SlideNotes"

export interface TemplatePageProps {
	href: string,
	icon: string,
	sections?: TemplatePageSectionProps[],
	notes?: NoteProps[],
	hidden?: boolean,
}

export interface TemplatePageSectionProps {
	title: string,
	items: TemplateDataCardProps[],
	icon?: string,
	notes?: NoteProps[],
	variant?: string,
}

export interface TemplateDataCardProps {
	title?: string,
	subtitle?: string,
	avatar?: string,
	content?: string[],
	chips?: TemplateDataCardChipsProps,
	actions?: TemplateDataCardActionProps[],
	contentAlign?: string,
	tooltip?: string,
}

export interface TemplateDataCardChipsProps {
	headerChips?: string[],
	contentChips?: string[],
	date?: string[],
	positions?: string[],
	languages?: string[],
	libraries?: string[],
	tools?: string[],
	awards?: string[],
	[key: string]: string[] | undefined,
}

export interface TemplateDataCardActionProps {
	text: string,
	href?: string,
	target?: string,
	hidden?: string,
}

