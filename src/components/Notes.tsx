import { Alert, Stack } from "@mui/material"
import * as React from "react"
import { NoteProps } from "./interfaces/NoteProps"
import theme from "../config/theme"

const Notes = ({ notesArray }: { notesArray: Array<NoteProps> }) => {

	const spacing = theme.spacing(1)

	return (<Stack spacing={spacing}>
		{notesArray.map((note, index) => {
			return <Alert key={index} severity={note.severity}>{note.text}</Alert>
		})}
	</Stack>)

}

export default Notes