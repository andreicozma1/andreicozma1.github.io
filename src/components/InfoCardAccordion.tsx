import { Accordion, AccordionDetails, AccordionSummary, Icon, Stack, Typography } from "@mui/material"
import * as React from "react"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { InfoCardProps } from "./InfoCardProps"

const InfoCardAccordion = ({
							   title,
							   avatar,
							   content
						   }: InfoCardProps) => {
	const cardElevation = 4
	const fontWeight = "medium"
	const spacing = 1

	return (<Accordion elevation={cardElevation}>
		{/*title={title} avatar={avatar}*/}
		<AccordionSummary
			expandIcon={<ExpandMoreIcon/>}
		>
			<Icon style={{ marginRight: "1rem" }} color="primary">{avatar}</Icon>
			<Typography sx={{
				fontWeight: fontWeight,
				fontSize  : "0.875rem"
			}}>{title}</Typography>
		</AccordionSummary>
		{content && <AccordionDetails>
            <Stack spacing={spacing}>
				{typeof content === "string" ? <Typography>{content}</Typography> : content.map((c, i) => <Typography
					key={i}>{c}</Typography>)}
            </Stack>
        </AccordionDetails>}
	</Accordion>)
}

export default InfoCardAccordion