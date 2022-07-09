import { Box, Card, CardContent, CardHeader, Stack, Typography } from "@mui/material"
import * as React from "react"
import theme from "../../config/theme"
import { InfoCardProps } from "../interfaces/InfoCardProps"
import CardHeaderChips from "../chips/CardHeaderChips"
import CardContentChips from "../chips/CardContentChips"

const InfoCard = ({
					  title,
					  subtitle,
					  avatar,
					  headerChips,
					  contentChips,
					  content
				  }: InfoCardProps) => {

	// TODO: Implement contentChips inside of the content

	return <Card elevation={theme.card.elevation}
				 sx={{
					 background: `rgba(255, 255, 255, ${theme.card.contentOpacity})`
				 }}>
		<Box sx={{

			background: `rgba(255, 255, 255, ${theme.card.headerOpacity})`, ...(headerChips && {
				display: "flex"
			} || {})
		}}>
			<CardHeader title={title}
						subheader={subtitle}
						titleTypographyProps={{
							fontWeight: theme.card.fontWeight,
							fontSize  : theme.card.titleFontSize
						}}
						subheaderTypographyProps={{ fontSize: theme.card.subheaderFontSize }}
						sx={{ display: "inline-flex" }}
						avatar={avatar}/>
			{headerChips && <CardHeaderChips chips={headerChips}/>}
		</Box>

		{(content || contentChips) && <CardContent component={Stack} spacing={theme.card.spacing}>
			{typeof content === "string"
				? <Typography>{content}</Typography>
				: content && content.map((text, index) => {
				return <Typography key={index}>{text}</Typography>
			})}

			{contentChips && <CardContentChips chips={contentChips}/>}
        </CardContent>}
	</Card>
}

export default InfoCard