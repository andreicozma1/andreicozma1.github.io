import SmartChipBox from "./SmartChipBox"
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