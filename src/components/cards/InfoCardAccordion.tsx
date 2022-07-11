/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import { Accordion, AccordionDetails, AccordionSummary, CardHeader, Stack, Typography } from "@mui/material"
import * as React from "react"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { InfoCardProps } from "../interfaces/InfoCardProps"
import theme from "../../config/theme"

const InfoCardAccordion = ({
							   title,
							   subtitle,
							   avatar,
							   chips,
							   content
						   }: InfoCardProps) => {

	return (<Accordion elevation={theme.card.elevation}
					   sx={{
						   background: `rgba(255, 255, 255, ${theme.card.contentOpacity})`
					   }}>
		<AccordionSummary expandIcon={<ExpandMoreIcon/>}
						  sx={{
							  background: `rgba(255, 255, 255, ${theme.card.headerOpacity})`
						  }}>

			<CardHeader title={title}
						subheader={subtitle}
						avatar={avatar}
						titleTypographyProps={{ fontWeight: theme.card.fontWeight }}
						sx={{
							py: "0px",
							px: "0px"
						}}>
			</CardHeader>
		</AccordionSummary>

		{content && <AccordionDetails>
            <Stack spacing={theme.card.spacing}>
				{typeof content === "string" ? <Typography>{content}</Typography> : content.map((c, i) => {
					return <Typography key={i}>{c}</Typography>
				})}
            </Stack>
        </AccordionDetails>}
	</Accordion>)
}

export default InfoCardAccordion