/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import React from "react"
import ThemeWrapper from "./src/components/ThemeWrapper"

export const wrapRootElement = ({ element }: { element: React.ReactNode }) => {
	return <ThemeWrapper>{element}</ThemeWrapper>
}
