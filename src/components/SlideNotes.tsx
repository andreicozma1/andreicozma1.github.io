import { Alert, Slide, Stack } from "@mui/material"
import * as React from "react"
import { useEffect } from "react"
import { NoteProps } from "./interfaces/NoteProps"
import theme from "../config/theme"

const SlideNotes = ({ notesArray }: { notesArray: Array<NoteProps> }) => {

	const spacing = theme.spacing(1)

	return (<Stack spacing={spacing}>
		{notesArray.map((note, index) => {

			const [ checked, setChecked ] = React.useState(false)

			useEffect(() => {
				setChecked(true)
			}, [])

			return <Slide key={index}
						  in={checked}
						  direction={index % 2 === 0 ? "left" : "right"}
						  timeout={theme.transitionDuration.notes}>
				<Alert severity={note.severity}>{note.text}</Alert>
			</Slide>
		})}
	</Stack>)
}

export default SlideNotes