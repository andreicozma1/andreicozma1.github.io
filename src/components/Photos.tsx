import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, StaticQuery } from "gatsby"
import { Typography } from "@mui/material"
import { Masonry } from "@mui/lab"

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
			const photos = data.allGooglePhotosAlbum.nodes
			return photos.map((albumNode: any) => (<div key={albumNode.title}>
					<Typography variant="h4">{albumNode.title}</Typography>
					<Masonry columns={3} spacing={2}>
						{albumNode.photos.map((photoNode: any) => {
							return <div style={{ width: 500 }}>
								<GatsbyImage image={getImage(photoNode.file)} alt="Photo"/>
							</div>
						})}
					</Masonry>
				</div>

			))
		}}
	/>
}

export default Photos

