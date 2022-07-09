import Chips from "./Chips"
import * as React from "react"

const CardHeaderChips = ({
							 chips
						 }: {
	chips: string | string[],
}) => {
	return (<Chips text={chips}
				   containerSx={{
					   px: 1
				   }}/>)
}

export default CardHeaderChips