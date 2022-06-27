import { Accordion, AccordionDetails, AccordionSummary, Avatar, Icon, Typography } from "@mui/material"
import * as React from "react"
import { ReactNode } from "react"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export interface InfoCardData {
	title: string,
	avatar: ReactNode,
	content: string | string[] | null
}

const InfoCardAccordion = ({ title, avatar, content }: InfoCardData) => {
	return (
		<Accordion>
			{/*title={title} avatar={avatar}*/}
			<AccordionSummary
				expandIcon={<ExpandMoreIcon/>}
			>
				<Icon style={{ marginRight: "1rem" }} color="primary">{avatar}</Icon>
				<Typography sx={{fontWeight: "medium"}}>{title}</Typography>
			</AccordionSummary>
			{content && <AccordionDetails >
				{
					typeof content === "string" ?
						<Typography>{content}</Typography> :
						content.map((c, i) => <Typography key={i}>{c}</Typography>)
				}
            </AccordionDetails>
			}
		</Accordion>
	)
}

export default InfoCardAccordion