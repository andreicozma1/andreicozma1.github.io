/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import * as React from "react"
import Page from "../components/layout/Page"
import { usePage } from "../config/PagesConfig"
import PhotosSection from "../components/PhotosSection"

const Photos = () => {
	const pageData = usePage("Photos")

	return <Page pageProps={pageData}>
		<PhotosSection/>
	</Page>
}

export default Photos
