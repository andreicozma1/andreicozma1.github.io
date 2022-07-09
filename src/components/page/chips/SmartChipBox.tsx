import { Box, ChipProps } from "@mui/material"
import * as React from "react"
import SmartChip from "./SmartChip"
import { CardChipsProps } from "../../interfaces/InfoCardProps"

export const combineChips = ({chips, all}: {chips?: CardChipsProps, all: boolean}) => {
	if ( chips === undefined ) {
		return {
			allHeaderChips: undefined,
			allContentChips: undefined
		}
	}
	let allHeaderChips: string[] = []
	let allContentChips: string[] = []

	if (chips.date) {
		if (typeof chips.date === "string") {
			allHeaderChips = [ ...allHeaderChips, chips.date ]
		} else {
			allHeaderChips = [ ...allHeaderChips, ...chips.date ]
		}
	}
	if (chips.headerChips) {
		if (typeof chips.headerChips === "string") {
			allHeaderChips = [ ...allHeaderChips, chips.headerChips ]
		} else {
			allHeaderChips = [ ...allHeaderChips, ...chips.headerChips ]
		}
	}

	if (all) {
		if (chips.awards) {
			if (typeof chips.awards === "string") {
				allContentChips = [ ...allContentChips, chips.awards ]
			} else {
				allContentChips = [ ...allContentChips, ...chips.awards ]
			}
		}

		if (chips.positions) {
			if (typeof chips.positions === "string") {
				allContentChips = [ ...allContentChips, chips.positions ]
			} else {
				allContentChips = [ ...allContentChips, ...chips.positions ]
			}
		}

		if (chips.languages) {
			if (typeof chips.languages === "string") {
				allContentChips = [ ...allContentChips, chips.languages ]
			} else {
				allContentChips = [ ...allContentChips, ...chips.languages ]
			}
		}

		if (chips.libraries) {
			if (typeof chips.libraries === "string") {
				allContentChips = [ ...allContentChips, chips.libraries ]
			} else {
				allContentChips = [ ...allContentChips, ...chips.libraries ]
			}
		}

		if (chips.tools) {
			if (typeof chips.tools === "string") {
				allContentChips = [ ...allContentChips, chips.tools ]
			} else {
				allContentChips = [ ...allContentChips, ...chips.tools ]
			}
		}
	}

	if (chips.contentChips) {
		if (typeof chips.contentChips === "string") {
			allContentChips = [ ...allContentChips, chips.contentChips ]
		} else {
			allContentChips = [ ...allContentChips, ...chips.contentChips ]
		}
	}

	return {
		allHeaderChips,
		allContentChips
	}
}

const SmartChipBox = ({
						  text,
						  defaultColor,
						  defaultVariant,
						  containerSx
					  }: {
	text: string | string[], defaultColor?: ChipProps["color"], defaultVariant?: ChipProps["variant"], containerSx?: object
}) => {

	const cSx = {
		ml: "auto",
		my: "auto", ...containerSx
	}

	return <Box sx={cSx}>
		{typeof text === "string"
			? <SmartChip text={text}
						 defaultColor={defaultColor} defaultVariant={defaultVariant}/>
			: text.map((chipText, index) => {
				return <SmartChip key={index} text={chipText}
								  defaultColor={defaultColor} defaultVariant={defaultVariant}/>
			})}
	</Box>
}

export default SmartChipBox
