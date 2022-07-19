import { CardContent, Typography } from "@mui/material"
import * as React from "react"
import { ReactNode } from "react"
import SmartChipBox from "../SmartChip/SmartChipBox"
import Theme from "../../config/Theme"

interface DataCardContentProps {
	content?: string[]
	contentChips?: string[]
	textAlign?: "left" | "right" | "center"
	containerSx?: {} | undefined
	children?: ReactNode[]
}

export function DataCardContent(props: DataCardContentProps) {
	const content = props.content?.length ? props.content : undefined
	const contentChips = props.contentChips?.length ? props.contentChips : undefined
	const hasCardContent = (content !== undefined || contentChips !== undefined || props.children !== undefined)

	return <>
		{hasCardContent && <CardContent sx={{
			px            : Theme.card.contentPaddingH,
			py            : Theme.card.contentPaddingV,
			textAlign     : props.textAlign,
			"&:last-child": { pb: Theme.card.contentPaddingV }
		}}>
			{content && content.map((tl, index) => {
				return <Typography key={index} sx={{
					fontSize: Theme.card.contentFontSize,
					mt      : Theme.card.paragraphSpacing
				}}>{tl}</Typography>
			})}
			{contentChips && <SmartChipBox text={contentChips} defaultVariant="filled"
                                           containerSx={{
											   display: "block", ...props.containerSx
										   }}/>}
			{props.children && props.children}
        </CardContent>}
	</>
}
