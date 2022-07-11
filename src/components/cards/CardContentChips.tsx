import SmartChipBox from "../chips/SmartChipBox"
import * as React from "react"
import theme from "../../config/theme"

const CardContentChips = ({
							  chips,
							  containerSx
						  }: {
	chips: string | string[], containerSx?: React.CSSProperties
}) => {
	return <SmartChipBox text={chips} defaultVariant="filled"
						 containerSx={{
							 display: "block",
							 ...containerSx
						 }}/>
}

export default CardContentChips