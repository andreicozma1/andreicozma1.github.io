import SmartChipBox from "../chips/SmartChipBox"
import * as React from "react"

const CardContentChips = ({
							  chips
						  }: {
	chips: string | string[],
}) => {
	return <SmartChipBox text={chips} defaultVariant="filled"
						 containerSx={{
							 display: "block",
							 pt     : 1
						 }}/>
}

export default CardContentChips