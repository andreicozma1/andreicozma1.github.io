import { Box, Card, CardContent, CardHeader, SvgIconTypeMap } from "@mui/material"
import * as React from "react"
import { ReactNode } from "react"
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
					  content,
					  children
				  }: {
	title: string, subtitle?: string, avatar?: SvgIconTypeMap["props"]["children"], content?: string | string[], headerChips?: string | string[], contentChips?: string | string[], children?: ReactNode
}) => {

	if (contentChips && contentChips.length === 0) contentChips = undefined

	return <Card elevation={theme.card.elevation}
				 sx={{
					 background: `rgba(255, 255, 255, ${theme.card.contentOpacity})` // height    : "100%"
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

		{(content || contentChips || children) && <CardContent>
			{content && <CardContentText text={content}/>}
			{contentChips && <CardContentChips chips={contentChips}/>}
			{children}
        </CardContent>}
	</Card>
}

export default InfoCard