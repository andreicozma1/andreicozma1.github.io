import * as React from "react"
import { Stack, Typography } from "@mui/material"
import SlideNotes, { NoteProps } from "../UIElement/SlideNotes"
import Theme from "../../config/Theme"
import { OverridableStringUnion } from "@mui/types"
import { Variant } from "@mui/material/styles/createTypography"
import { TypographyPropsVariantOverrides } from "@mui/material/Typography/Typography"

const PageSection = ({
						 title,
						 notes,
						 children
					 }: { title: string, notes?: Array<NoteProps>, children: React.ReactNode }) => {

	const id = title && title.replace(/,/g, "").replace(/&/g, "").replace(/  /g, " ").replace(/ /g, "-").toLowerCase()
	const typographyVariant = Theme.section.titleVariant as OverridableStringUnion<Variant | "inherit", TypographyPropsVariantOverrides>

	return <div>
		<Stack id={id && id || ""}
			   spacing={Theme.section.itemSpacing}
			   sx={{
				   my: Theme.section.verticalMargin
			   }}>
			<Typography variant={typographyVariant}
						fontWeight={Theme.section.titleFontWeight}
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

export default PageSection