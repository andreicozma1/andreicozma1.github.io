import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, StaticQuery } from "gatsby"
import { Masonry } from "@mui/lab"
import { useMediaQuery } from "@mui/material"
import ThemeConfig from "../config/ThemeConfig"
import Section from "./layout/Section"
import DataCardResponsive from "./cards/DataCardResponsive"

const PhotosSection = () => {

	return <StaticQuery
		query={graphql` query {
							allGooglePhotosAlbum {
								nodes {
									title
									cover {
										file {
											childImageSharp { gatsbyImageData	}
										}
									}
									photos {
										file {
											childImageSharp {gatsbyImageData}
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
			return photos.map((albumNode: any) => (<Section title={albumNode.title} key={albumNode.title}>
					<Masonry columns={columns} spacing={2}>
						{albumNode.photos.map((photoNode: any, index: number) => {
							return <DataCardResponsive maxWidth="lg"
													   itemProps={{
														   tooltip: "Expand Image"
													   }}
													   key={photoNode.file + index}>
								<GatsbyImage image={getImage(photoNode.file)} alt={"Photo " + photoNode.file}/>
							</DataCardResponsive>
						})}
					</Masonry>
				</Section>

			))
		}}
	/>
}

export default PhotosSection

