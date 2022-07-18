import { Dialog } from "@mui/material"
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
		if (backdropCard) setOpen(true)
	}, [ backdropCard ])

	const [ numPages, setNumPages ] = useState(null)
	const [ pageNumber, setPageNumber ] = useState(1)

	function onDocumentLoadSuccess({ numPages }: any) {
		setNumPages(numPages)
	}

	return <Dialog onClose={handleClose} open={open && backdropCard}
				   maxWidth={backdropCard && backdropCard.maxWidth || "md"}>
		<DataCardResponsive itemProps={backdropCard && backdropCard.itemProps}>
			{backdropCard && backdropCard.children}
		</DataCardResponsive>
	</Dialog>

}

export default BackdropCard