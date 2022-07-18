import { Dialog, DialogContent, Grow } from "@mui/material"
import * as React from "react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import DataCardResponsive from "./DataCardResponsive"
import { setCardData } from "../../reducers/selectedCard"
import { TransitionProps } from "@mui/material/transitions"
import ThemeConfig from "../../config/ThemeConfig"

const Transition = React.forwardRef(function Transition(props: TransitionProps & {
	children: React.ReactElement<any, any>;
}, ref: React.Ref<unknown>) {
	return <Grow ref={ref} {...props} children={props.children}/>
})

const BackdropCard = () => {
	const dispatch = useDispatch()
	const backdropCard = useSelector((state: any) => state.backdropCard)
	const [ open, setOpen ] = useState(false)

	const handleClose = () => {
		setOpen(false)
		setTimeout(() => {
			dispatch(setCardData(null))
		}, 500)
	}

	useEffect(() => {
		setOpen(!!backdropCard)
	}, [ backdropCard ])

	return <Dialog onClose={handleClose} open={open}
				   TransitionComponent={Transition}
				   scroll="paper"
				   PaperProps={{
					   sx: { m: ThemeConfig.spacing(2) }
				   }}
				   maxWidth={backdropCard && backdropCard.maxWidth || "sm"}>
		<DialogContent sx={{ p: 0 }}>
			{backdropCard && <DataCardResponsive itemProps={backdropCard.itemProps}>
				{backdropCard.children}
            </DataCardResponsive>}
		</DialogContent>

	</Dialog>
}

export default BackdropCard