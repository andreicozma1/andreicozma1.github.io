import { DataCardProps } from "../props/DataCardComponentsProps"
import { useDispatch, useSelector } from "react-redux"
import { useMediaQuery } from "@mui/material"
import ThemeConfig from "../../config/ThemeConfig"
import DataCard from "./DataCard"
import { setCardData } from "../../reducers/selectedCard"
import * as React from "react"
import { ReactNode } from "react"

const DataCardResponsive = ({ itemProps, overrideProps, maxWidth, children }: {
	itemProps?: DataCardProps, overrideProps?: any, maxWidth?: string, children?: ReactNode
}) => {
	const dispatch = useDispatch()
	const backdropCard = useSelector((state: any) => state.backdropCard)

	const matchesSm = useMediaQuery(ThemeConfig.breakpoints.down("sm"))
	let headerChips = itemProps && itemProps.chips && [
		...itemProps.chips.headerChips || [], ...itemProps.chips.date || []
	]
	let contentChips = itemProps && itemProps.chips && [
		...itemProps.chips.awards || [], ...itemProps.chips.positions || [], ...itemProps.chips.languages || [],
		...itemProps.chips.libraries || [], ...itemProps.chips.tools || [], ...itemProps.chips.contentChips || []
	]

	if (matchesSm) {
		console.log("matches")
		contentChips = [ ...contentChips || [], ...headerChips || [] ]
		headerChips = []
	}

	const cardProps = {
		...itemProps, headerChips: headerChips, contentChips: contentChips, ...overrideProps
	}

	return <DataCard
		{...cardProps}
		onClick={() => {
			if (backdropCard) {
				dispatch(setCardData(null))
			} else {
				dispatch(setCardData({
					itemProps: itemProps, children: children, maxWidth: maxWidth
				}))
			}
		}}>
		{children}
	</DataCard>
}

export default DataCardResponsive