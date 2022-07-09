import Chips from "./Chips"
import * as React from "react"

const CardContentChips = ({
							  chips
						  }: {
	chips: string | string[],
}) => {
	return <Chips text={chips} defaultVariant="filled"
				  containerSx={{
					  display: "block"
				  }}/>
}

export default CardContentChips