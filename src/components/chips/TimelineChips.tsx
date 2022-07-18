/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/

import SmartChipBox from "./SmartChipBox"
import * as React from "react"

const TimelineChips = ({ chips, index }: { chips: string | string[], index: number }) => {

	const getChipsSx = (index: number) => {
		let chipsProps = {
			my: "0px", p: "0px"
		}
		if (index % 2 === 0) {
			chipsProps = {
				...chipsProps, ml: "auto", mr: "0px"
			}
		} else {
			chipsProps = {
				...chipsProps, ml: "0px", mr: "auto"
			}
		}

		return chipsProps
	}

	return <>
		<SmartChipBox text={chips}
					  defaultVariant="filled"
					  containerSx={getChipsSx(index)}/>
	</>
}

export default TimelineChips