import { InfoCardProps } from "../interfaces/InfoCardProps"
import Chips from "./Chips"
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
		{itemProps.headerChips && <Chips text={itemProps.headerChips}
                                         defaultVariant="filled"
                                         containerSx={getChipsSx(index)}/>}
		{itemProps.contentChips && <Chips text={itemProps.contentChips}
                                          defaultVariant="filled"
                                          containerSx={getChipsSx(index)}/>}
	</>
}

export default TimelineOppositeChipsContent