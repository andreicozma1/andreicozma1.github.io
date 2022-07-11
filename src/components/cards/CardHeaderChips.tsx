/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import SmartChipBox from "../chips/SmartChipBox"
import * as React from "react"

const CardHeaderChips = ({
							 chips
						 }: {
	chips: string | string[],
}) => {
	return (<SmartChipBox text={chips}
						  containerSx={{
							  px: 1
						  }}/>)
}

export default CardHeaderChips