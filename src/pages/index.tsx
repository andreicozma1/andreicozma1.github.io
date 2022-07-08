import * as React from "react"
import Layout from "../components/Layout"
import { usePage } from "../config/pages"
import { Avatar, styled } from "@mui/material"

const StyledAvatar = styled(Avatar)(({ theme }) => ({
	width    : "20rem",
	height   : "20rem",
	position : "absolute",
	left     : "50%",
	top      : "50%",
	transform: "translate(-50%, -50%)",
	border   : `5px solid ${theme.palette.primary.main}`
}))

const Home = () => {
	const pageData = usePage("Home")

	return <Layout data={page}>
			<StyledAvatar
				alt="Andrei Cozma"
				src="profile.jpg"
			/>
		</Layout>
}

export default Home
