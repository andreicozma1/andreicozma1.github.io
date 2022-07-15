/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import { Alert, Slide, Stack } from "@mui/material"
import * as React from "react"
import { useEffect } from "react"
import ThemeConfig from "../config/ThemeConfig"
import { NoteProps } from "./props/UIComponentsProps"

const SlideNotes = ({ notesArray }: { notesArray: Array<NoteProps> }) => {

	const spacing = ThemeConfig.spacing(1)

	return (<Stack spacing={spacing}>
		{notesArray.map((note, index) => {

			const [ checked, setChecked ] = React.useState(false)

			useEffect(() => {
				setChecked(true)
			}, [])

			return <Slide key={index}
						  in={checked}
						  direction={index % 2 === 0 ? "left" : "right"}
						  timeout={ThemeConfig.transitionDuration.notes}>
				<Alert severity={note.severity}>{note.text}</Alert>
			</Slide>
		})}
	</Stack>)
}

export default SlideNotes