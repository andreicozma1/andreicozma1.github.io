/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import * as React from "react"
import Page from "../components/layout/Page"
import { usePage } from "../config/PagesConfig"
import HomeAvatar from "../components/avatars/HomeAvatar"

const Home = () => {
	const pageData = usePage("Home")

	return <Page pageProps={pageData}>
		<HomeAvatar/>
	</Page>
}

export default Home
