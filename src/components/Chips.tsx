import { Chip, Stack } from "@mui/material"
import * as React from "react"
import theme from "../config/theme"

const Chips = ({ text }: { text: string | string[] }) => {
	const spacing = theme.spacing(1)
	const chipVariant = "outlined"
	const chipStackStyle = {
		ml: "auto",
		my: "auto",
		py: theme.spacing(1),
		px: theme.spacing(2)
	}

	return <Stack direction="row"
				  spacing={spacing} sx={chipStackStyle}>
		{typeof text === "string"
			? <Chip label={text} variant="outlined"></Chip>
			: text.map((chipText, index) => {
				return <Chip key={index} label={chipText} variant={chipVariant}/>
			})}
	</Stack>
}

export default Chips
