/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/

import { SvgIconTypeMap } from "@mui/material"

export interface DataCardProps {
	title: string,
	subtitle?: string,
	avatar?: SvgIconTypeMap["props"]["children"],
	content?: string | string[],
	chips?: DataCardChipsProps,
	actions?: Array<DataCardActionsProps>,
}

export interface DataCardActionsProps {
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