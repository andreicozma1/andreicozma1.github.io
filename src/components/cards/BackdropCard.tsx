import { Dialog, DialogContent } from "@mui/material"
import * as React from "react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import DataCardResponsive from "./DataCardResponsive"
import { setCardData } from "../../reducers/selectedCard"

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
				   scroll="paper"
				   maxWidth={backdropCard && backdropCard.maxWidth || "sm"}>
		<DialogContent sx={{ p: 0 }}>
			{backdropCard && <DataCardResponsive itemProps={backdropCard.itemProps}>
				{backdropCard.children}
            </DataCardResponsive>}
		</DialogContent>

	</Dialog>

}

export default BackdropCard