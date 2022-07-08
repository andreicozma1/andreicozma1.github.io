import * as React from "react"
import Layout from "../components/Layout"
import { usePage } from "../config/pages"
import { Avatar, styled } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"

const StyledAvatar = styled(Avatar)(({ theme }) => ({
	width: "20rem",
	height: "20rem",
	position: "absolute",
	left: "50%",
	top: "50%",
	transform: "translate(-50%, -50%)",
	border: `5px solid ${theme.palette.primary.main}`,
}))

const Home = () => {
	const page = usePage("Home")

	return (
		<div>
			{/*<iframe id="gallery" src="https://andreig992.myportfolio.com"*/}
			{/*		style={{*/}
			{/*			width: "100%",*/}
			{/*			height: "100%",*/}
			{/*			position: "absolute"*/}
			{/*		}}/>*/}

			<Layout page={page}>
				<StyledAvatar
					alt="Andrei Cozma"
					src="profile.jpg"
				/>
			</Layout>
		</div>
	)
}

export default Home
