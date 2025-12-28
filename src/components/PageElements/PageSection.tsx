import * as React from "react"
import { Stack, Typography, Box, Link } from "@mui/material"
import LinkIcon from "@mui/icons-material/Link"
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
			<Box sx={{
				display: "flex",
				alignItems: "center",
				gap: 1,
				"&:hover .anchor-link": {
					opacity: 1
				}
			}}>
				<Typography variant={typographyVariant}
							fontWeight={Theme.section.titleFontWeight}
							sx={{
								textDecoration: "underline"
							}}>
					{title}
				</Typography>
				<Link
					href={`#${id}`}
					className="anchor-link"
					sx={{
						opacity: 0,
						transition: "opacity 0.2s",
						color: "text.secondary",
						display: "flex",
						alignItems: "center",
						textDecoration: "none",
						"&:hover": {
							color: "primary.main"
						}
					}}
					aria-label={`Link to ${title}`}
				>
					<LinkIcon fontSize="small" />
				</Link>
			</Box>
			{notes && <SlideNotes notesArray={notes}/>}
			{children}
		</Stack>
	</div>
}

export default PageSection