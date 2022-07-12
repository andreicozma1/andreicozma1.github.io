/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import { Box, Card, CardActions, CardContent, CardHeader, SvgIconTypeMap } from "@mui/material"
import * as React from "react"
import { ReactNode } from "react"
import theme from "../../config/theme"
import CardHeaderChips from "./CardHeaderChips"
import CardContentChips from "./CardContentChips"
import CardContentText from "./CardContentText"
import { CardActionProps } from "../interfaces/CardActionProps"
import { Button } from "gatsby-theme-material-ui"

const InfoCard = ({
					  title,
					  subtitle,
					  avatar,
					  headerChips,
					  contentChips,
					  content,
					  actions,
					  children
				  }: {
	title: string, subtitle?: string, avatar?: SvgIconTypeMap["props"]["children"], content?: string | string[], headerChips?: string | string[], contentChips?: string | string[], actions?: Array<CardActionProps>
	children?: ReactNode
}) => {

	if (contentChips && contentChips.length === 0) contentChips = undefined

	let chipsStyle = {}
	if (content) {
		chipsStyle = { mt: theme.card.contentPaddingV }
	}

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

		{(content || contentChips || children) && <CardContent sx={{
			px            : theme.card.contentPaddingH,
			py            : theme.card.contentPaddingV,
			"&:last-child": { pb: theme.card.contentPaddingV }
		}}>
			{content && <CardContentText text={content}/>}
			{contentChips && <CardContentChips chips={contentChips} containerSx={chipsStyle}/>}
			{children}
        </CardContent>}

		{actions && <CardActions sx={{
			justifyContent: "center",
			pb            : theme.card.contentPaddingV,
			mb            : theme.card.contentPaddingV
		}}>
			{actions.map((action, index) => {
				return <Button key={index}
							   variant="outlined"
							   href={action.href}
							   {...action.target && { target: action.target } || {}}>
					{action.text}
				</Button>
			})}
        </CardActions>}
	</Card>
}

export default InfoCard