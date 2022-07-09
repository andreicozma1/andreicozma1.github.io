import { Box, Card, CardContent, CardHeader, Icon, Stack, Typography } from "@mui/material"
import * as React from "react"
import theme from "../../config/theme"
import { InfoCardProps } from "../interfaces/InfoCardProps"
import Chips from "../Chips"

const InfoCard = ({ props }: { props: InfoCardProps }) => {

	return <Card elevation={theme.card.elevation}
				 sx={{
					 background: `rgba(255, 255, 255, ${theme.card.contentOpacity})`
				 }}>
		<Box sx={{
			display   : "flex",
			background: `rgba(255, 255, 255, ${theme.card.headerOpacity})`
		}}>
			<CardHeader title={props.title}
						subheader={props.subtitle}
						avatar={<Icon color={theme.card.iconColor}>{props.avatar}</Icon>}
						titleTypographyProps={{ fontWeight: theme.card.fontWeight }}
						sx={{ display: "inline-flex" }}
			/>
			{props.chips && <Chips text={props.chips}/>}
		</Box>

		{props.content && <CardContent component={Stack} spacing={theme.card.spacing}>
			{typeof props.content === "string"
				? <Typography>{props.content}</Typography>
				: props.content.map((text, index) => {
					return <Typography key={index}>{text}</Typography>
				})}
        </CardContent>}
	</Card>
}

export default InfoCard