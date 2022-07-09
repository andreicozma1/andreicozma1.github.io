import SmartChipBox from "./SmartChipBox"
import * as React from "react"

const CardContentChips = ({
							  chips
						  }: {
	chips: string | string[],
}) => {
	return <SmartChipBox text={chips} defaultVariant="filled"
						 containerSx={{
					  display: "block"
				  }}/>
}

export default CardContentChips