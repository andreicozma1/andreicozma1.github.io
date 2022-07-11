import { Typography } from "@mui/material"
import * as React from "react"
import theme from "../../config/theme"

const CardContentText = ({ text }: { text: string | string[] }) => {
	return <>
		{typeof text === "string" ? <Typography sx={{
			fontSize: theme.card.contentFontSize,
		}}>{text}</Typography> : text && text.map((tl, index) => {
			return <Typography key={index} sx={{
				fontSize: theme.card.contentFontSize
			}}>{tl}</Typography>
		})}
	</>
}

export default CardContentText