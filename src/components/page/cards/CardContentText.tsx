import { Typography } from "@mui/material"
import * as React from "react"

const CardContentText = ({ text }: { text: string | string[] }) => {
	return <>
		{typeof text === "string"
			? <Typography>{text}</Typography>
			: text && text.map((tl, index) => {
			return <Typography key={index}>{tl}</Typography>
		})}
	</>
}

export default CardContentText