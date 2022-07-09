import * as React from "react"
import { Stack, Typography } from "@mui/material"
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
import Chips from "../Chips"
import { InfoCardProps } from "../interfaces/InfoCardProps"

const PageSection = ({ props }: { props: PageSectionProps }) => {

	const getChipsSx = (index: number) => {
		let chipsProps = {
			my: "0px",
			p : "0px"
		}
		if (index % 2 === 0) {
			chipsProps = {
				...chipsProps,
				ml: "auto",
				mr: "0px"
			}
		} else {
			chipsProps = {
				...chipsProps,
				ml: "0px",
				mr: "auto"
			}
		}

		return chipsProps
	}

	const getColor = (index: number): TimelineDotProps["color"] => {
		if (index % 2 === 0) return "secondary"
		return "primary"
	}

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
		<Timeline position="alternate">
			{props.items.map((itemProps: InfoCardProps, index: number) => {
				return <TimelineItem key={index}>
					<TimelineOppositeContent
						sx={{
							display       : "flex",
							alignItems    : "center",
							justifyContent: "center",
							flexDirection : "column"
						}}>
						{itemProps.headerChips && <Chips text={itemProps.headerChips} direction="row"
                                                         defaultVariant="filled"
                                                         sx={getChipsSx(index)}/>}
						{itemProps.contentChips && <Chips text={itemProps.contentChips} direction="row"
                                                          defaultVariant="filled"
                                                          sx={getChipsSx(index)}/>}
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
	</Stack>
}

export default PageSection
