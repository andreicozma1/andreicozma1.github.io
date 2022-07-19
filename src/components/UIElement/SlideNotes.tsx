/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/

import { Alert, AlertColor, Grow, Stack } from "@mui/material"
import * as React from "react"
import { useEffect, useState } from "react"
import Theme from "../../config/Theme"

export interface NoteProps {
	text: string,
	severity?: AlertColor
}

const SlideNotes = ({ notesArray }: { notesArray: Array<NoteProps> }) => {
	const spacing = Theme.spacing(1)
	return (<Stack spacing={spacing}>
		{notesArray.map((note, index) => {

			const [ transitionDone, setTransitionDone ] = useState(false)

			useEffect(() => {
				setTransitionDone(true)
			}, [])

			return <Grow key={index}
						 in={transitionDone}
						 timeout={Theme.transitionDuration.notes}>
				<Alert severity={note.severity}>{note.text}</Alert>
			</Grow>
		})}
	</Stack>)
}

export default SlideNotes