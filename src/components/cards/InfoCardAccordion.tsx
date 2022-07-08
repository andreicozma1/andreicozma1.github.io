import {
	Accordion, AccordionDetails, AccordionSummary, Box, CardHeader, Chip, Icon, Stack, Typography
} from "@mui/material"
import * as React from "react"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { InfoCardProps } from "../interfaces/InfoCardProps"
import theme from "../../config/theme"
import Chips from "../Chips"

const InfoCardAccordion = ({ props }: { props: InfoCardProps }) => {
	const cardElevation = 4
	const fontWeight = "medium"
	const iconColor = "primary"
	const spacing = theme.spacing(1)

	return (<Accordion elevation={cardElevation}>
		{/*title={title} avatar={avatar}*/}
		<Box>
			<AccordionSummary expandIcon={<ExpandMoreIcon/>}>

				<CardHeader title={props.title}
							subheader={props.subtitle}
							avatar={<Icon color={iconColor}>{props.avatar}</Icon>}
							titleTypographyProps={{ fontWeight: fontWeight }}
							expandIcon={<ExpandMoreIcon/>}
							sx={{
								py: "0px",
								px: "0px"
							}}>
				</CardHeader>
				{props.chips && <Chips text={props.chips} />}
			</AccordionSummary>
		</Box>


		{props.content && <AccordionDetails>
            <Stack spacing={spacing}>
				{typeof props.content === "string"
					? <Typography>{props.content}</Typography>
					: props.content.map((c, i) => {
						return <Typography key={i}>{c}</Typography>
					})}
            </Stack>
        </AccordionDetails>}
	</Accordion>)
}

export default InfoCardAccordion