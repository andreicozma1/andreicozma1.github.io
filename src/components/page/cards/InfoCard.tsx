import { Box, Card, CardContent, CardHeader, Stack, SvgIconTypeMap } from "@mui/material"
import * as React from "react"
import theme from "../../../config/theme"
import CardHeaderChips from "./CardHeaderChips"
import CardContentChips from "./CardContentChips"
import CardContentText from "./CardContentText"

const InfoCard = ({
					  title,
					  subtitle,
					  avatar,
					  headerChips,
					  contentChips,
					  content
				  }: {
	title: string, subtitle?: string, avatar?: SvgIconTypeMap["props"]["children"], content?: string | string[], headerChips?: string | string[], contentChips?: string | string[],
}) => {

	if (contentChips && contentChips.length === 0) contentChips = undefined

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

		{(content || contentChips) && <CardContent>
			{content && <CardContentText text={content}/>}
			{contentChips && <CardContentChips chips={contentChips}/>}
        </CardContent>}
	</Card>
}

export default InfoCard