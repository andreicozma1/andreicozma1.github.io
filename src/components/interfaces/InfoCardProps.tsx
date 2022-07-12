/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import * as React from "react"
import { SvgIconTypeMap } from "@mui/material"
import { CardActionProps } from "./CardActionProps"

export interface CardChipsProps {
	headerChips?: string[],
	contentChips?: string[],
	date?: string[],
	positions?: string[],
	languages?: string[],
	libraries?: string[],
	tools?: string[],
	awards?: string[],
}

export interface InfoCardProps {
	title: string,
	subtitle?: string,
	avatar?: SvgIconTypeMap["props"]["children"],
	content?: string | string[],
	chips?: CardChipsProps,
	actions?: Array<CardActionProps>,
}