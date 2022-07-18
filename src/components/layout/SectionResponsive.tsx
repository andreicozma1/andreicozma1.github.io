/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import * as React from "react"
import { Box, Icon, useMediaQuery } from "@mui/material"
import ThemeConfig from "../../config/ThemeConfig"
import {
	Masonry,
	Timeline,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineDotProps,
	TimelineItem,
	TimelineOppositeContent,
	TimelineSeparator
} from "@mui/lab"
import TimelineChips from "../chips/TimelineChips"
import { PageSectionProps } from "../props/PageComponentsProps"
import { DataCardProps } from "../props/DataCardComponentsProps"
import DataCardResponsive from "../cards/DataCardResponsive"
import Section from "./Section"

const TimelineSection = ({ props }: { props: PageSectionProps }) => {
	const getColor = (index: number): TimelineDotProps["color"] => {
		if (index % 2 === 0) return "secondary"
		return "primary"
	}
	return <Timeline position="alternate">
		{props.items.map((itemProps: DataCardProps, index: number) => {

			const headerChips = itemProps.chips && [
				...itemProps.chips.headerChips || [], ...itemProps.chips.date || []
			]
			const contentChips = itemProps.chips && [ ...itemProps.chips.awards || [] ]
			const timelineChips1 = itemProps.chips && [
				...itemProps.chips.positions || [], ...itemProps.chips.languages || [],
				...itemProps.chips.libraries || [], ...itemProps.chips.tools || []
			]
			const timelineChips2 = itemProps.chips && itemProps.chips.contentChips || []

			return <TimelineItem key={index}>
				<TimelineOppositeContent
					sx={{
						display       : "flex",
						alignItems    : "center",
						justifyContent: "center",
						flexDirection : "column"
					}}>
					{timelineChips1 && <TimelineChips chips={timelineChips1} index={index}/>}
					{timelineChips2 && <TimelineChips chips={timelineChips2} index={index}/>}
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

const ListSection = ({ props }: { props: PageSectionProps }) => {
	const matches = useMediaQuery(ThemeConfig.breakpoints.down("md"))

	return <Box sx={{ flexGrow: 1 }}>
		<Masonry columns={props.variant === "grid6" ? (matches ? 1 : 2) : 1}
				 spacing={ThemeConfig.section.itemSpacing}
				 sx={{
					 m: 0
				 }}>
			{props.items.map((itemProps: DataCardProps) => {
				return <DataCardResponsive key={itemProps.title} itemProps={itemProps}/>
			})}
		</Masonry>
	</Box>
}

const SectionResponsive = ({ props }: { props: PageSectionProps }) => {
	const matches = useMediaQuery(ThemeConfig.breakpoints.up("md"))

	return <Section title={props.title} notes={props.notes}>
		{matches && props.variant === "timeline" ? <TimelineSection props={props}/> : <ListSection props={props}/>}
	</Section>
}

export default SectionResponsive
