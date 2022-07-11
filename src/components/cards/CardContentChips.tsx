/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import SmartChipBox from "../chips/SmartChipBox"
import * as React from "react"

const CardContentChips = ({
							  chips,
							  containerSx
						  }: {
	chips: string | string[], containerSx?: React.CSSProperties
}) => {
	return <SmartChipBox text={chips} defaultVariant="filled"
						 containerSx={{
							 display: "block", ...containerSx
						 }}/>
}

export default CardContentChips