import { Box, Card, CardContent, CardHeader, Chip, Icon, Stack, Typography } from "@mui/material"
import * as React from "react"
import theme from "../../config/theme"
import { InfoCardProps } from "../interfaces/InfoCardProps"
import Chips from "../Chips"

const InfoCard = ({ props }: { props: InfoCardProps }) => {
	const cardElevation = 4
	const fontWeight = "medium"
	const iconColor = "primary"
	const spacing = theme.spacing(1)

	return (<Card elevation={cardElevation}>
		<Box sx={{ display: "flex" }}>
			<CardHeader title={props.title}
						subheader={props.subtitle}
						avatar={<Icon color={iconColor}>{props.avatar}</Icon>}
						titleTypographyProps={{ fontWeight: fontWeight }}
						sx={{ display: "inline-flex" }}
			/>
			{props.chips && <Chips text={props.chips} />}
		</Box>

		{props.content && <CardContent component={Stack} spacing={spacing}>
			{typeof props.content === "string"
				? <Typography>{props.content}</Typography>
				: props.content.map((c, i) => <Typography
					key={i}>{c}</Typography>)}
        </CardContent>}
	</Card>)
}

export default InfoCard