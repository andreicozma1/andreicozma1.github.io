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
import TimelineOppositeChipsContent from "../chips/TimelineOppositeChipsContent"

const SectionTimeline = ({ props }: { props: PageSectionProps }) => {

	const getColor = (index: number): TimelineDotProps["color"] => {
		if (index % 2 === 0) return "secondary"
		return "primary"
	}

	return <Timeline position="alternate">
		{props.items.map((itemProps: InfoCardProps, index: number) => {
			return <TimelineItem key={index}>
				<TimelineOppositeContent
					sx={{
						display       : "flex",
						alignItems    : "center",
						justifyContent: "center",
						flexDirection : "column"
					}}>
					<TimelineOppositeChipsContent itemProps={itemProps} index={index}/>
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot color={getColor(index)}>
						{itemProps.avatar}
					</TimelineDot>
					<TimelineConnector/>
				</TimelineSeparator>
				<TimelineContent>
					<props.itemComponent
						title={itemProps.title}
						subtitle={itemProps.subtitle}
						content={itemProps.content}
					></props.itemComponent>
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
				return <Grid item xs={12} md={props.variant === "grid6"
					? 6
					: 12} key={index}>
					<props.itemComponent
						title={itemProps.title}
						subtitle={itemProps.subtitle}
						content={itemProps.content}
						avatar={itemProps.avatar}
						headerChips={itemProps.headerChips}
						contentChips={itemProps.contentChips}
					/>
				</Grid>
			})}
		</Grid>
	</Box>
}

const PageSection = ({ props }: { props: PageSectionProps }) => {

	const matches = useMediaQuery(theme.breakpoints.up("md"))

	return <Stack spacing={theme.section.itemSpacing}
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
