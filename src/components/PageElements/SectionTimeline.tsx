import {
	Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineDotProps, TimelineItem, TimelineOppositeContent,
	TimelineSeparator
} from "@mui/lab"
import { TemplateDataCardProps, TemplatePageSectionProps } from "../TemplatedDataProps"
import SmartChipBox from "../SmartChip/SmartChipBox"
import { Icon } from "@mui/material"
import DataCardResponsive from "../DataCard/DataCardResponsive"
import * as React from "react"

export const SectionTimeline = ({ props }: { props: TemplatePageSectionProps }) => {
	const getColor = (index: number): TimelineDotProps["color"] => {
		if (index % 2 === 0) return "secondary"
		return "primary"
	}
	return <Timeline position="alternate">
		{props.items.map((itemProps: TemplateDataCardProps, index: number) => {

			const headerChips = itemProps.chips && [
				...itemProps.chips.headerChips || [], ...itemProps.chips.date || []
			]
			const contentChips = itemProps.chips && [ ...itemProps.chips.awards || [] ]
			const timelineChips1 = itemProps.chips && [
				...itemProps.chips.positions || [], ...itemProps.chips.languages || [],
				...itemProps.chips.libraries || [], ...itemProps.chips.tools || []
			]
			const timelineChips2 = itemProps.chips && itemProps.chips.contentChips || []

			const getChipBox = (chips: string[]) => {
				return <SmartChipBox text={chips}
									 align={index % 2 === 0 ? "right" : "left"}
									 defaultVariant="filled"
									 containerSx={{
										 my: 0,
										 px: 1.5
									 }}/>
			}

			return <TimelineItem key={index}>
				<TimelineOppositeContent
					sx={{
						display       : "flex",
						alignItems    : "center",
						justifyContent: "center",
						flexDirection : "column"
					}}>
					{timelineChips1 && getChipBox(timelineChips1)}
					{timelineChips2 && getChipBox(timelineChips2)}
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot color={getColor(index)}>
						<Icon>{itemProps.avatar}</Icon>
					</TimelineDot>
					<TimelineConnector/>
				</TimelineSeparator>
				<TimelineContent>
					<DataCardResponsive
						itemProps={itemProps}
						overrideProps={{
							headerChips     : headerChips,
							contentChips    : contentChips,
							avatar          : undefined,
							headerChipsAlign: index % 2 === 0 ? "right" : "left"
						}}/>
				</TimelineContent>
			</TimelineItem>
		})}
	</Timeline>
}