import { InfoCardProps } from "../interfaces/InfoCardProps"
import SmartChipBox from "./SmartChipBox"
import * as React from "react"

const TimelineOppositeChipsContent = ({
										  itemProps,
										  index
									  }: { itemProps: InfoCardProps, index: number }) => {

	const getChipsSx = (index: number) => {
		let chipsProps = {
			my: "0px",
			p : "0px"
		}
		if (index % 2 === 0) {
			chipsProps = {
				...chipsProps,
				ml: "auto",
				mr: "0px"
			}
		} else {
			chipsProps = {
				...chipsProps,
				ml: "0px",
				mr: "auto"
			}
		}

		return chipsProps
	}

	return <>
		{itemProps.headerChips && <SmartChipBox text={itemProps.headerChips}
                                                defaultVariant="filled"
                                                containerSx={getChipsSx(index)}/>}
		{itemProps.contentChips && <SmartChipBox text={itemProps.contentChips}
                                                 defaultVariant="filled"
                                                 containerSx={getChipsSx(index)}/>}
	</>
}

export default TimelineOppositeChipsContent