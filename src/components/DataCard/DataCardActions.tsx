import { TemplateDataCardActionProps } from "../TemplatedDataProps"
import * as React from "react"
import { CardActions } from "@mui/material"
import { Button } from "gatsby-theme-material-ui"
import Theme from "../../config/Theme"

interface DataCardActionsProps {
	actions?: TemplateDataCardActionProps[]
	onButtonClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const DataCardActions = (props: DataCardActionsProps) => {
	return <>
		{props.actions && <CardActions sx={{
			justifyContent: "center",
			pb            : Theme.card.contentPaddingV,
			mb            : Theme.card.contentPaddingV
		}}>
			{props.actions.map((action, index) => {
				return <Button key={index}
							   variant="outlined"
							   onClick={props.onButtonClick}
							   href={action.href}
							   {...action.target && { target: action.target } || {}}>
					{action.text}
				</Button>
			})}
        </CardActions>}
	</>
}

