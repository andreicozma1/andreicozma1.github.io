import { Alert, Box } from "@mui/material"
import * as React from "react"
import { NoteProps } from "./interfaces/NoteProps"

const Notes = ({ notesArray }: { notesArray: Array<NoteProps> }) => {

	return (<Box>
		{notesArray.map((note, i) => {
			return <Alert key={i} severity={note.severity}>{note.text}</Alert>
		})}
	</Box>)

}

export default Notes