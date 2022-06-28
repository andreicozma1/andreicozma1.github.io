import { Box, Card, CardContent, CardHeader, Chip, Icon, Stack, Typography } from "@mui/material"
import * as React from "react"
import theme from "../config/theme"
import { InfoCardProps } from "./InfoCardProps"

const InfoCard = ({ title, subtitle, chips, avatar, content }: InfoCardProps) => {
	const cardElevation = 4
	const fontWeight = "medium"
	const spacing = theme.spacing(1)
	const chipStackStyle = { ml: "auto", my: "auto", p: theme.spacing(2) }
	return (
		<Card elevation={cardElevation}>
			<Box sx={{ display: "flex" }}>
				<CardHeader title={title}
							subheader={subtitle}
							avatar={<Icon color="primary">{avatar}</Icon>}
							titleTypographyProps={{ fontWeight: fontWeight }}
							sx={{ display: "inline-flex" }}>
				</CardHeader>
				{chips && <Stack direction="row"
                                spacing={spacing} sx={chipStackStyle}>
					{
						typeof chips === "string" ?
							<Chip label={chips} variant="outlined"></Chip> :
							chips.map((chip, i) => <Chip key={i} label={chip} variant="outlined"/>)
					}
                </Stack>
				}
			</Box>

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