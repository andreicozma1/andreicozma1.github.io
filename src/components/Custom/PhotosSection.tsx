import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, StaticQuery } from "gatsby"
import { Masonry } from "@mui/lab"
import { useMediaQuery } from "@mui/material"
import PageSection from "../PageElements/PageSection"
import DataCardResponsive from "../DataCard/DataCardResponsive"
import Theme from "../../config/Theme"

const PhotosSection = () => {
	const query = graphql`query {
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
						}`
	return <StaticQuery
		query={query}
		render={data => {
			const matchesMd = useMediaQuery(Theme.breakpoints.up("md"))
			const matchesLg = useMediaQuery(Theme.breakpoints.up("lg"))
			let columns = matchesMd ? (matchesLg ? 3 : 2) : 1
			const photos = data.allGooglePhotosAlbum.nodes
			return photos.map((albumNode: any) => (<PageSection title={albumNode.title} key={albumNode.title}>
					<Masonry columns={columns} spacing={2}>
						{albumNode.photos.map((photoNode: any, index: number) => {
							const imageData = getImage(photoNode.file)
							if (!imageData) return null
							return <DataCardResponsive maxWidth="lg"
													   itemProps={{
														   tooltip: "Expand Image"
													   }}
													   key={photoNode.file + index}>
								<GatsbyImage image={imageData} alt={"Photo " + photoNode.file}/>
							</DataCardResponsive>
						})}
					</Masonry>
				</PageSection>

			))
		}}
	/>
}

export default PhotosSection

