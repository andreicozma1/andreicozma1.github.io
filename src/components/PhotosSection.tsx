import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, StaticQuery } from "gatsby"
import { Masonry } from "@mui/lab"
import { PageSection } from "./layout/PageSectionTemplate"
import { useMediaQuery } from "@mui/material"
import ThemeConfig from "../config/ThemeConfig"

const PhotosSection = () => {

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
			const matchesMd = useMediaQuery(ThemeConfig.breakpoints.up("md"))
			const matchesLg = useMediaQuery(ThemeConfig.breakpoints.up("lg"))
			let columns = matchesMd ? (matchesLg ? 3 : 2) : 1
			const photos = data.allGooglePhotosAlbum.nodes
			return photos.map((albumNode: any) => (<PageSection title={albumNode.title} key={albumNode.title}>
					<Masonry columns={columns} spacing={2}>
						{albumNode.photos.map((photoNode: any) => {
							return <GatsbyImage image={getImage(photoNode.file)} alt="Photo"/>
						})}
					</Masonry>
				</PageSection>

			))
		}}
	/>
}

export default PhotosSection

