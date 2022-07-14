import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, StaticQuery } from "gatsby"
import { Masonry } from "@mui/lab"
import { PageSection } from "./page/PageSectionTemplate"
import { useMediaQuery } from "@mui/material"
import theme from "../config/theme"

const Photos = () => {

	return <StaticQuery
		query={graphql`
						query {
							allGooglePhotosAlbum {
								nodes {
									title
									cover {
										file {
											childImageSharp {
												gatsbyImageData
											}
										}
									}
									photos {
										file {
											childImageSharp {
												gatsbyImageData
											}
										}
									}
								}
							}
						}
					`}
		render={data => {
			const matchesMd = useMediaQuery(theme.breakpoints.up("md"))
			const matchesLg = useMediaQuery(theme.breakpoints.up("lg"))
			let columns = matchesMd ? (matchesLg ? 3 : 2) : 1
			const photos = data.allGooglePhotosAlbum.nodes
			return photos.map((albumNode: any) => (<PageSection title={albumNode.title} key={albumNode.title}>
					<Masonry columns={columns} spacing={1}>
						{albumNode.photos.map((photoNode: any) => {
							return <div>
								<GatsbyImage image={getImage(photoNode.file)} alt="Photo"/>
							</div>
						})}
					</Masonry>
				</PageSection>

			))
		}}
	/>
}

export default Photos

