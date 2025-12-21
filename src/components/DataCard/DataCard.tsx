/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import { Card, Tooltip } from "@mui/material"
import * as React from "react"
import { ReactNode, useState } from "react"
import { TemplateDataCardActionProps } from "../TemplatedDataProps"
import { DataCardActions } from "./DataCardActions"
import { DataCardContent } from "./DataCardContent"
import { DataCardHeader } from "./DataCardHeader"
import Theme from "../../config/Theme"

interface DataCardProp {
	title: string,
	subtitle?: string,
	avatar?: "string",
	headerChips?: string[],
	headerChipsAlign?: "left" | "right" | "center",
	content?: string[],
	contentChips?: string[],
	contentAlign?: "left" | "right" | "center",
	actions?: Array<TemplateDataCardActionProps>,
	tooltip?: string,
	onClick?: () => void,
	children?: ReactNode[]
}

const DataCard = (props: DataCardProp) => {
	const [ elevation, setElevation ] = useState(Theme.card.elevation)

	const cardSx = {
		background: `rgba(255, 255, 255, ${Theme.card.contentOpacity})`
	}
	let chipsStyle = props.content && { mt: Theme.card.contentPaddingV } || {}

	const onActionBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation()
		setElevation(0)
	}

	const onCardHover = () => {
		setElevation(Theme.card.elevation * 2)
	}

	const onCardLeave = () => {
		setElevation(Theme.card.elevation)
	}

	return <Tooltip title={props.tooltip}
					placement="top"
					enterDelay={1000}
					enterNextDelay={30000}
					arrow
					followCursor
					{...(props.tooltip === undefined && { open: false } || {})}>
		<Card elevation={elevation}
			  onMouseEnter={onCardHover}
			  onTouchStart={onCardHover}
			  onMouseLeave={onCardLeave}
			  onTouchEnd={onCardLeave}
			  onClick={props.onClick}
			  style={{
				  cursor: "pointer"
			  }}
			  sx={cardSx}>
			<DataCardHeader headerChips={props.headerChips}
							headerChipsAlign={props.headerChipsAlign}
							title={props.title}
							subtitle={props.subtitle} avatar={props.avatar}/>
			<DataCardContent content={props.content}
							 contentChips={props.contentChips}
							 textAlign={props.contentAlign}
							 containerSx={chipsStyle}>
				{props.children && props.children}
			</DataCardContent>
			<DataCardActions actions={props.actions}
							 onButtonClick={onActionBtnClick}/>
		</Card>
	</Tooltip>
}

export default DataCard