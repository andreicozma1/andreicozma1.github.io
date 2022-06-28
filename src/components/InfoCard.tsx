import { Card, CardContent, CardHeader, Icon, Stack, Typography } from "@mui/material"
import * as React from "react"
import { ReactNode } from "react"

export interface InfoCardData {
	title: string,
	avatar: ReactNode,
	content: string | string[] | null
}

const InfoCard = ({ title, avatar, content }: InfoCardData) => {
	const cardElevation = 4
	const fontWeight = "medium"
	const spacing = 1

	return (
		<Card elevation={cardElevation}>
			<CardHeader title={title}
						avatar={<Icon color="primary">{avatar}</Icon>}
						titleTypographyProps={{ fontWeight: fontWeight}} />
			{content && <CardContent component={Stack} spacing={spacing}>
				{
					typeof content === "string" ?
						<Typography>{content}</Typography> :
						content.map((c, i) => <Typography key={i}>{c}</Typography>)
				}
            </CardContent>
			}
		</Card>
	)
}

export default InfoCard