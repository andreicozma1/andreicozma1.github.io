import { Chip, ChipProps, Stack } from "@mui/material"
import * as React from "react"
import theme from "../config/theme"
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined"
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined"
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined"
import { ChipsProps } from "./interfaces/ChipsProps"

const Chips = ({
				   text,
				   defaultColor,
				   defaultVariant,
				   direction,
				   sx
			   }: ChipsProps) => {

	direction = direction || "row"
	const spacing = theme.spacing(1)
	const chipStackStyle = {
		ml: "auto",
		my: "auto",
		py: theme.spacing(1),
		px: theme.spacing(2),
		...sx
	}

	const getIcon = (text: string) => {
		const dateMatch = [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "/" ]
		if (dateMatch.some(m => text.includes(m))) {
			return <CalendarMonthOutlinedIcon/>
		}
		if (text.includes("GPA")) {
			return <MilitaryTechOutlinedIcon/>
		}
		if (text.includes("Asynchronous")) {
			return <LanguageOutlinedIcon/>
		}
		return undefined
	}

	const getColor = (text: string): ChipProps["color"] => {
		if (text.includes("GPA")) {
			return "secondary"
		}
		return defaultColor || "default"
	}

	const getVariant = (text: string): ChipProps["variant"] => {
		if (text.includes("GPA")) {
			return "filled"
		}
		return defaultVariant || "outlined"
	}

	return <Stack direction={direction}
				  spacing={spacing} sx={chipStackStyle}>
		{typeof text === "string"
			? <Chip label={text}
					variant={getVariant(text)}
					color={getColor(text)}
					icon={getIcon(text)}/>
			: text.map((chipText, index) => {
				return <Chip key={index} label={chipText}
							 variant={getVariant(chipText)}
							 color={getColor(chipText)}
							 icon={getIcon(chipText)}/>
			})}
	</Stack>
}

export default Chips
