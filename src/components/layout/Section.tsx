import { NoteProps } from "../props/UIComponentsProps"
import * as React from "react"
import { Stack, Typography } from "@mui/material"
import ThemeConfig from "../../config/ThemeConfig"
import SlideNotes from "../SlideNotes"

const Section = ({
					 title,
					 notes,
					 children
				 }: { title: string, notes?: Array<NoteProps>, children: React.ReactNode }) => {

	let id = title && title.replace(/,/g, "").replace(/&/g, "").replace(/  /g, " ").replace(/ /g, "-").toLowerCase()

	return <div>
		<Stack id={id && id || ""}
			   spacing={ThemeConfig.section.itemSpacing}
			   sx={{
				   my: ThemeConfig.section.verticalMargin
			   }}>
			<Typography variant={ThemeConfig.section.titleVariant}
						fontWeight={ThemeConfig.section.titleFontWeight}
						sx={{
							textDecoration: "underline"
						}}>
				{title}
			</Typography>
			{notes && <SlideNotes notesArray={notes}/>}
			{children}
		</Stack>
	</div>
}

export default Section