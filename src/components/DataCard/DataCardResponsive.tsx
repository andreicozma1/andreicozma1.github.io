import { TemplateDataCardProps } from "../TemplatedDataProps"
import { useDispatch, useSelector } from "react-redux"
import { useMediaQuery } from "@mui/material"
import DataCard from "./DataCard"
import { setCardData } from "../../reducers/selectedCard"
import * as React from "react"
import { ReactNode } from "react"
import Theme from "../../config/Theme"

interface DataCardResponsiveProps {
	itemProps?: TemplateDataCardProps,
	overrideProps?: any,
	maxWidth?: string,
	children?: ReactNode
}

const DataCardResponsive = (props: DataCardResponsiveProps) => {
	const dispatch = useDispatch()
	const backdropCard = useSelector((state: any) => state.backdropCard)

	const matchesSm = useMediaQuery(Theme.breakpoints.down("sm"))
	let headerChips = props.itemProps && props.itemProps.chips && [
		...props.itemProps.chips.headerChips || [], ...props.itemProps.chips.date || []
	]
	let contentChips = props.itemProps && props.itemProps.chips && [
		...props.itemProps.chips.awards || [], ...props.itemProps.chips.positions || [],
		...props.itemProps.chips.languages || [], ...props.itemProps.chips.libraries || [],
		...props.itemProps.chips.tools || [], ...props.itemProps.chips.contentChips || []
	]

	if (matchesSm) {
		contentChips = [ ...contentChips || [], ...headerChips || [] ]
		headerChips = []
	}

	const cardProps = {
		...props.itemProps,
		headerChips : headerChips,
		contentChips: contentChips, ...props.overrideProps
	}

	return <DataCard
		{...cardProps}
		onClick={() => {
			if (backdropCard) {
				dispatch(setCardData(null))
			} else {
				dispatch(setCardData({
					itemProps: props.itemProps,
					children : props.children,
					maxWidth : props.maxWidth
				}))
			}
		}}>
		{props.children}
	</DataCard>
}

export default DataCardResponsive