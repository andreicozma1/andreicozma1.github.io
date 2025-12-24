import { Dialog, DialogContent, Grow } from "@mui/material"
import * as React from "react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import DataCardResponsive from "../DataCard/DataCardResponsive"
import { setCardData } from "../../reducers/selectedCard"
import { TransitionProps } from "@mui/material/transitions"
import Theme from "../../config/Theme"
import { RootState } from "../../config/Main"

const Transition = React.forwardRef(function Transition(props: TransitionProps & {
	children: React.ReactElement;
}, ref: React.Ref<unknown>) {
	return <Grow ref={ref} {...props} children={props.children}/>
})

const PopupCard = () => {
	const dispatch = useDispatch()
	const backdropCard = useSelector((state: RootState) => state.backdropCard)
	const [ open, setOpen ] = useState(false)

	const handleClose = () => {
		setOpen(false)
		setTimeout(() => {
			dispatch(setCardData(null))
		}, 350)
	}

	useEffect(() => {
		setOpen(!!backdropCard)
	}, [ backdropCard ])

	return <Dialog onClose={handleClose} open={open}
				   TransitionComponent={Transition}
				   scroll="paper"
				   PaperProps={{
					   sx: { m: Theme.spacing(2) }
				   }}
				   transitionDuration={Theme.transitionDuration.backdropCard}
				   maxWidth={backdropCard && backdropCard.maxWidth || "sm"}>
		<DialogContent sx={{ p: 0 }}>
			{backdropCard && <DataCardResponsive itemProps={backdropCard.itemProps}>
				{backdropCard.children}
            </DataCardResponsive>}
		</DialogContent>

	</Dialog>
}

export default PopupCard