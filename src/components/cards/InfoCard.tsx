import { Box, Card, CardContent, CardHeader, Chip, Icon, Stack, Typography } from "@mui/material"
import * as React from "react"
import theme from "../../config/theme"
import { InfoCardProps } from "../interfaces/InfoCardProps"

const InfoCard = ({ props }: { props: InfoCardProps }) => {
	const cardElevation = 4
	const fontWeight = "medium"
	const spacing = theme.spacing(1)
	const chipStackStyle = {
		ml: "auto",
		my: "auto",
		p : theme.spacing(2)
	}
	return (<Card elevation={cardElevation}>
		<Box sx={{ display: "flex" }}>
			<CardHeader title={props.title}
						subheader={props.subtitle}
						avatar={<Icon color="primary">{props.avatar}</Icon>}
						titleTypographyProps={{ fontWeight: fontWeight }}
						sx={{ display: "inline-flex" }}>
			</CardHeader>
			{props.chips && <Stack direction="row"
                                   spacing={spacing} sx={chipStackStyle}>
				{typeof props.chips === "string"
					? <Chip label={props.chips} variant="outlined"></Chip>
					: props.chips.map((chip, i) => <Chip key={i} label={chip} variant="outlined"/>)}
            </Stack>}
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