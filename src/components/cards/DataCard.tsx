/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import { Box, Card, CardActions, CardContent, CardHeader, Icon, SvgIconTypeMap, Tooltip } from "@mui/material"
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
					  tooltip,
					  actions,
					  headerChipsAlign,
					  contentAlign,
					  onClick,
					  children
				  }: {
	title: string, subtitle?: string, avatar?: SvgIconTypeMap["props"]["children"], content?: string | string[], headerChips?: string | string[], contentChips?: string | string[], tooltip?: string, actions?: Array<DataCardActionProps>, headerChipsAlign?: "left" | "right", contentAlign?: "left" | "right" | "center", onClick?: () => void, children?: ReactNode
}) => {
	if (headerChipsAlign === undefined) headerChipsAlign = "right"
	if (contentChips && contentChips.length === 0) contentChips = undefined
	let chipsStyle = {}
	if (content) chipsStyle = { mt: ThemeConfig.card.contentPaddingV }
	const [ isHover, setIsHover ] = React.useState(false)

	const getCard = () => {
		return (<Card elevation={ThemeConfig.card.elevation}
					  onMouseOver={() => {
						  setIsHover(true)
					  }}
					  onMouseLeave={() => {
						  setIsHover(false)
					  }}
					  onClick={onClick}
					  style={{
						  cursor: "pointer"
					  }}
					  sx={{
						  background: `rgba(255, 255, 255, ${ThemeConfig.card.contentOpacity})`, ...(onClick && isHover && { outline: `2px solid ${ThemeConfig.palette.secondary.light}` } || {})
					  }}>
			<Box sx={{
				background: `rgba(255, 255, 255, ${ThemeConfig.card.headerOpacity})`, ...(headerChips && {
					display: "flex"
				} || {})
			}}>
				{headerChips && headerChipsAlign === "left" &&
                    <CardHeaderChips chips={headerChips} align={headerChipsAlign}/>}
				{(title || subtitle || avatar) && <CardHeader title={title}
                                                              subheader={subtitle}
                                                              titleTypographyProps={{
																  fontWeight: ThemeConfig.card.fontWeight,
																  fontSize  : ThemeConfig.card.titleFontSize
															  }}
                                                              subheaderTypographyProps={{ fontSize: ThemeConfig.card.subheaderFontSize }}
															  {...(avatar && { avatar: <Icon>{avatar}</Icon> })}/>}
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
								   onClick={(e) => {
									   e.stopPropagation()
								   }}
								   href={action.href}
								   {...action.target && { target: action.target } || {}}>
						{action.text}
					</Button>
				})}
            </CardActions>}
		</Card>)
	}

	// return clickAction && <Tooltip arrow title={clickAction.text} placement="top-start">
	// 	{<Link underline="none" variant="caption" to={clickAction.href} target={clickAction.target}>{getCard()}</Link>}
	// </Tooltip> || getCard()
	return tooltip && <Tooltip arrow title={tooltip} placement="top-start">
		{getCard()}
    </Tooltip> || getCard()
}

export default DataCard