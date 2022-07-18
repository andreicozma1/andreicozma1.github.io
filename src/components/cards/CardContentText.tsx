/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import { Typography } from "@mui/material"
import * as React from "react"
import ThemeConfig from "../../config/ThemeConfig"

const CardContentText = ({ text }: { text: string | string[] }) => {
	return <>
		{typeof text === "string" ? <Typography sx={{
			fontSize: ThemeConfig.card.contentFontSize
		}}>{text}</Typography> : text && text.map((tl, index) => {
			return <Typography key={index} sx={{
				fontSize: ThemeConfig.card.contentFontSize, mt: ThemeConfig.card.paragraphSpacing
			}}>{tl}</Typography>
		})}
	</>
}

export default CardContentText