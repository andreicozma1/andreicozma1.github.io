import { Accordion, AccordionDetails, AccordionSummary, CardHeader, Icon, Stack, Typography } from "@mui/material"
import * as React from "react"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { InfoCardProps } from "../interfaces/InfoCardProps"
import theme from "../../config/theme"
import Chips from "../Chips"

const InfoCardAccordion = ({ props }: { props: InfoCardProps }) => {

	return (<Accordion elevation={theme.card.elevation}
					   sx={{
						   background: `rgba(255, 255, 255, ${theme.card.contentOpacity})`
					   }}>
		<AccordionSummary expandIcon={<ExpandMoreIcon/>}
						  sx={{
							  background: `rgba(255, 255, 255, ${theme.card.headerOpacity})`
						  }}>

			<CardHeader title={props.title}
						subheader={props.subtitle}
						avatar={<Icon color={theme.card.iconColor}>{props.avatar}</Icon>}
						titleTypographyProps={{ fontWeight: theme.card.fontWeight }}
						sx={{
							py: "0px",
							px: "0px"
						}}>
			</CardHeader>
			{props.chips && <Chips text={props.chips}/>}
		</AccordionSummary>


		{props.content && <AccordionDetails>
            <Stack spacing={theme.card.spacing}>
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