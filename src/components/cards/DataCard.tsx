/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import { Box, Card, CardActions, CardContent, CardHeader, Icon, SvgIconTypeMap } from "@mui/material"
import * as React from "react"
import { ReactNode } from "react"
import ThemeConfig from "../../config/ThemeConfig"
import CardHeaderChips from "./CardHeaderChips"
import CardContentChips from "./CardContentChips"
import CardContentText from "./CardContentText"
import { DataCardActionProps } from "../props/DataCardComponentsProps"
import { Button } from "gatsby-theme-material-ui"

const DataCard = ({
					  title,
					  subtitle,
					  avatar,
					  headerChips,
					  contentChips,
					  content,
					  actions,
					  headerChipsAlign,
					  contentAlign,
					  children
				  }: {
	title: string, subtitle?: string, avatar?: SvgIconTypeMap["props"]["children"], content?: string | string[], headerChips?: string | string[], contentChips?: string | string[], actions?: Array<DataCardActionProps>, headerChipsAlign?: "left" | "right" | "center", contentAlign?: "left" | "right" | "center", children?: ReactNode
}) => {
	if (contentChips && contentChips.length === 0) contentChips = undefined
	let chipsStyle = {}
	if (content) chipsStyle = { mt: ThemeConfig.card.contentPaddingV }

	return <Card elevation={ThemeConfig.card.elevation}
				 sx={{
					 background: `rgba(255, 255, 255, ${ThemeConfig.card.contentOpacity})`
				 }}>
		<Box sx={{
			background: `rgba(255, 255, 255, ${ThemeConfig.card.headerOpacity})`, ...(headerChips && {
				display: "flex"
			} || {})
		}}>
			{headerChips && headerChipsAlign === "left" &&
                <CardHeaderChips chips={headerChips} align={headerChipsAlign}/>}
			<CardHeader title={title}
						subheader={subtitle}
						titleTypographyProps={{
							fontWeight: ThemeConfig.card.fontWeight,
							fontSize  : ThemeConfig.card.titleFontSize
						}}
						subheaderTypographyProps={{ fontSize: ThemeConfig.card.subheaderFontSize }}
				// sx={{ display: "inline-flex" }}
						{...(avatar && { avatar: <Icon>{avatar}</Icon> })}/>
			{headerChips && headerChipsAlign === "right" &&
                <CardHeaderChips chips={headerChips} align={headerChipsAlign}/>}
		</Box>
		{(content || contentChips || children) && <CardContent sx={{
			px            : ThemeConfig.card.contentPaddingH,
			py            : ThemeConfig.card.contentPaddingV,
			textAlign     : contentAlign,
			"&:last-child": { pb: ThemeConfig.card.contentPaddingV }
		}}>
			{content && <CardContentText text={content}/>}
			{contentChips && <CardContentChips chips={contentChips} containerSx={chipsStyle}/>}
			{children}
        </CardContent>}

		{actions && <CardActions sx={{
			justifyContent: "center",
			pb            : ThemeConfig.card.contentPaddingV,
			mb            : ThemeConfig.card.contentPaddingV
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

export default DataCard