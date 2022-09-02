/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import * as React from "react"
import Page from "../components/PageElements/Page"
import HomeAvatar from "../components/UIElement/HomeAvatar"
import { usePage } from "../Utils"
import SEO from "../components/SEO"

const Home = () => {
	const pageData = usePage("Home")

	return <Page pageProps={pageData}>
		<HomeAvatar/>
	</Page>
}

export default Home

export const Head = () => (
	<SEO />
)