import { Card, CardContent, CardHeader, Stack, Typography } from "@mui/material"
import * as React from "react"
import { ReactNode } from "react"

export interface InfoCardData {
	title: string,
	avatar: ReactNode,
	content: string | string[] | null
}

const InfoCard = ({ title, avatar, content }: InfoCardData) => {
	return (
		<Card elevation={4}>
			<CardHeader title={title} avatar={avatar} titleTypographyProps={{ fontWeight: "medium" }} />
			{content && <CardContent component={Stack} spacing={1}>
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