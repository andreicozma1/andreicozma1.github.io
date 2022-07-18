/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import SmartChipBox from "../chips/SmartChipBox"
import * as React from "react"

const CardHeaderChips = ({ chips, align }: { chips: string | string[], align: "left" | "right" }) => {
	return (<SmartChipBox text={chips}
						  align={align}
						  containerSx={{
							  px: 1.5
						  }}/>)
}

export default CardHeaderChips