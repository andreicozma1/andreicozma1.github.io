/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import { Accordion, AccordionDetails, AccordionSummary, CardHeader, Stack, Typography } from "@mui/material"
import * as React from "react"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ThemeConfig from "../../config/ThemeConfig"
import { DataCardProps } from "../props/DataCardComponentsProps"

const DataCardAccordion = ({ title, subtitle, avatar, content }: DataCardProps) => {

	return (<Accordion elevation={ThemeConfig.card.elevation}
					   sx={{
						   background: `rgba(255, 255, 255, ${ThemeConfig.card.contentOpacity})`
					   }}>
		<AccordionSummary expandIcon={<ExpandMoreIcon/>}
						  sx={{
							  background: `rgba(255, 255, 255, ${ThemeConfig.card.headerOpacity})`
						  }}>

			<CardHeader title={title}
						subheader={subtitle}
						avatar={avatar}
						titleTypographyProps={{ fontWeight: ThemeConfig.card.fontWeight }}
						sx={{
							py: "0px", px: "0px"
						}}>
			</CardHeader>
		</AccordionSummary>

		{content && <AccordionDetails>
            <Stack spacing={ThemeConfig.card.spacing}>
				{typeof content === "string" ? <Typography>{content}</Typography> : content.map((c, i) => {
					return <Typography key={i}>{c}</Typography>
				})}
            </Stack>
        </AccordionDetails>}
	</Accordion>)
}

export default DataCardAccordion