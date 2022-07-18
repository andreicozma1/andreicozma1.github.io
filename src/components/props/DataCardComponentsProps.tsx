/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/

export interface DataCardProps {
	title: string,
	subtitle?: string,
	avatar?: string,
	content?: string[],
	chips?: DataCardChipsProps,
	actions?: Array<DataCardActionProps>,
	contentAlign?: "left" | "right" | "center",
	clickAction?: DataCardActionProps
}

export interface DataCardActionProps {
	text: string,
	href: string,
	target?: string,
}

export interface DataCardChipsProps {
	headerChips?: string[],
	contentChips?: string[],
	date?: string[],
	positions?: string[],
	languages?: string[],
	libraries?: string[],
	tools?: string[],
	awards?: string[],
}