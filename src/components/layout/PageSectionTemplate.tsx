/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import * as React from "react"
import { Box, Grid, Icon, Stack, Typography, useMediaQuery } from "@mui/material"
import ThemeConfig from "../../config/ThemeConfig"
import SlideNotes from "../SlideNotes"
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
import DataCard from "../cards/DataCard"
import { PageSectionProps } from "../props/PageComponentsProps"
import { DataCardProps } from "../props/DataCardComponentsProps"
import { NoteProps } from "../props/UIComponentsProps"

const SectionTimeline = ({ props }: { props: PageSectionProps }) => {
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
					<DataCard
						title={itemProps.title}
						subtitle={itemProps.subtitle}
						content={itemProps.content}
						headerChips={headerChips}
						contentChips={contentChips}
						actions={itemProps.actions}
						headerChipsAlign={index % 2 === 0 ? "right" : "left"}
						contentAlign={itemProps.contentAlign}
					></DataCard>
				</TimelineContent>
			</TimelineItem>
		})}
	</Timeline>
}

const SectionList = ({ props }: { props: PageSectionProps }) => {
	const matches = useMediaQuery(ThemeConfig.breakpoints.down("md"))
	const matchesSm = useMediaQuery(ThemeConfig.breakpoints.down("sm"))

	return <Box sx={{ flexGrow: 1 }}>
		<Masonry columns={props.variant === "grid6" ? (matches ? 1 : 2) : 1}
				 spacing={ThemeConfig.section.itemSpacing}
				 sx={{
					 m: 0
				 }}>
			{props.items.map((itemProps: DataCardProps, index: number) => {

				let headerChips = itemProps.chips && [
					...itemProps.chips.headerChips || [], ...itemProps.chips.date || []
				]
				let contentChips = itemProps.chips && [
					...itemProps.chips.awards || [], ...itemProps.chips.positions || [],
					...itemProps.chips.languages || [], ...itemProps.chips.libraries || [],
					...itemProps.chips.tools || [], ...itemProps.chips.contentChips || []
				]

				if (matchesSm) {
					console.log("matches")
					contentChips = [ ...contentChips || [], ...headerChips || [] ]
					headerChips = []
				}

				return <Grid item xs={12} key={index}>
					<DataCard
						title={itemProps.title}
						subtitle={itemProps.subtitle}
						content={itemProps.content}
						avatar={itemProps.avatar}
						headerChips={headerChips}
						contentChips={contentChips}
						actions={itemProps.actions}
						contentAlign={itemProps.contentAlign}
					/>
				</Grid>
			})}
		</Masonry>
	</Box>
}

export const PageSection = ({
								title,
								notes,
								children
							}: { title: string, notes?: Array<NoteProps>, children: React.ReactNode }) => {

	let id = title && title.replace(/,/g, "").replace(/&/g, "").replace(/  /g, " ").replace(/ /g, "-").toLowerCase()

	return <Stack id={id && id || ""}
				  spacing={ThemeConfig.section.itemSpacing}
				  sx={{
					  my: ThemeConfig.section.verticalMargin
				  }}>
		<Typography variant={ThemeConfig.section.titleVariant}
					fontWeight={ThemeConfig.section.titleFontWeight}
					sx={{
						textDecoration: "underline"
					}}>
			{title}
		</Typography>
		{notes && <SlideNotes notesArray={notes}/>}
		{children}
	</Stack>
}

const PageSectionTemplate = ({ props }: { props: PageSectionProps }) => {
	const matches = useMediaQuery(ThemeConfig.breakpoints.up("md"))

	return <PageSection title={props.title} notes={props.notes}>
		{matches && props.variant === "timeline" ? <SectionTimeline props={props}/> : <SectionList props={props}/>}
	</PageSection>
}

export default PageSectionTemplate
