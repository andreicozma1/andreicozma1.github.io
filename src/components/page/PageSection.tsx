import * as React from "react"
import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material"
import theme from "../../config/theme"
import { PageSectionProps } from "../interfaces/PageSectionProps"
import SlideNotes from "../SlideNotes"
import {
	Timeline,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineDotProps,
	TimelineItem,
	TimelineOppositeContent,
	TimelineSeparator
} from "@mui/lab"
import { InfoCardProps } from "../interfaces/InfoCardProps"
import TimelineChips from "./chips/TimelineChips"
import InfoCard from "./cards/InfoCard"

const SectionTimeline = ({ props }: { props: PageSectionProps }) => {
	const getColor = (index: number): TimelineDotProps["color"] => {
		if (index % 2 === 0) return "secondary"
		return "primary"
	}

	return <Timeline position="alternate">
		{props.items.map((itemProps: InfoCardProps, index: number) => {

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
						{itemProps.avatar}
					</TimelineDot>
					<TimelineConnector/>
				</TimelineSeparator>
				<TimelineContent>
					<InfoCard
						title={itemProps.title}
						subtitle={itemProps.subtitle}
						content={itemProps.content}
						headerChips={headerChips}
						contentChips={contentChips}
					></InfoCard>
				</TimelineContent>
			</TimelineItem>
		})}
	</Timeline>
}

const SectionList = ({ props }: { props: PageSectionProps }) => {
	return <Box sx={{ flexGrow: 1 }}>
		<Grid container spacing={theme.section.itemSpacing}
			  justifyContent="space-evenly"
			  alignItems="stretch">
			{props.items.map((itemProps: InfoCardProps, index: number) => {

				const headerChips = itemProps.chips && [
					...itemProps.chips.headerChips || [], ...itemProps.chips.date || []
				]
				const contentChips = itemProps.chips && [
					...itemProps.chips.awards || [], ...itemProps.chips.positions || [],
					...itemProps.chips.languages || [], ...itemProps.chips.libraries || [],
					...itemProps.chips.tools || [], ...itemProps.chips.contentChips || []
				]

				return <Grid item xs={12} md={props.variant === "grid6"
					? 6
					: 12} key={index}>
					<InfoCard
						title={itemProps.title}
						subtitle={itemProps.subtitle}
						content={itemProps.content}
						avatar={itemProps.avatar}
						headerChips={headerChips}
						contentChips={contentChips}
					/>
				</Grid>
			})}
		</Grid>
	</Box>
}

const PageSection = ({ props }: { props: PageSectionProps }) => {

	const matches = useMediaQuery(theme.breakpoints.up("md"))

	return <Stack id={props.title && props.title || ""}
				  spacing={theme.section.itemSpacing}
				  sx={{
					  my: theme.section.verticalMargin
				  }}>
		<Typography variant={theme.section.titleVariant}
					fontWeight={theme.section.titleFontWeight}
					sx={{
						textDecoration: "underline"
					}}>
			{props.title}
		</Typography>
		{props.notes && <SlideNotes notesArray={props.notes}/>}
		{matches && props.variant === "timeline"
			? <SectionTimeline props={props}/>
			: <SectionList props={props}/>}
	</Stack>
}

export default PageSection
