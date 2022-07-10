import * as React from "react"
import Page from "../components/page/Page"
import { usePage } from "../config/pages"
import HomeAvatar from "../components/avatars/HomeAvatar"

const Home = () => {
	const pageData = usePage("Home")

	return <Page pageProps={pageData}>
		<HomeAvatar/>
	</Page>
}

export default Home
