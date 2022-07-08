import { Accordion, AccordionDetails, AccordionSummary, Icon, Stack, Typography } from "@mui/material"
import * as React from "react"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { InfoCardProps } from "../interfaces/InfoCardProps"

const InfoCardAccordion = ({ props }: { props: InfoCardProps }) => {
	const cardElevation = 4
	const fontWeight = "medium"
	const spacing = 1

	return (<Accordion elevation={cardElevation}>
		{/*title={title} avatar={avatar}*/}
		<AccordionSummary
			expandIcon={<ExpandMoreIcon/>}
		>
			<Icon style={{ marginRight: "1rem" }} color="primary">{props.avatar}</Icon>
			<Typography sx={{
				fontWeight: fontWeight,
				fontSize  : "0.875rem"
			}}>{props.title}</Typography>
		</AccordionSummary>
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