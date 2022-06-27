import { BookRounded, CodeRounded, HomeRounded, SchoolRounded, SummarizeRounded } from "@mui/icons-material"

import React from "react"
import DataAbout from "../data/resume/DataAbout"
import SectionCardList from "../components/SectionCardList"
import Completed from "../data/classes/Completed"
import Current from "../data/classes/Current"

export interface Page {
	href: string,
	icon: React.ReactElement,
	content: Array<React.ReactNode>
}

export const pages: { [key: string]: Page } = {
	"Home": {
		href: "/",
		icon: <HomeRounded/>,
		content: [
			<SectionCardList section={DataAbout}/>,
			<SectionCardList section={DataAbout}/>
		]
	},
	"Resume": {
		href: "/resume",
		icon: <SummarizeRounded/>,
		content: [
			<SectionCardList section={DataAbout}/>
		]
	},
	"Projects": {
		href: "/projects",
		icon: <CodeRounded/>,
		content: [
			<SectionCardList section={DataAbout}/>
		]
	},
	"Academics": {
		href: "/academics",
		icon: <SchoolRounded/>,
		content: [
			<SectionCardList section={Current}/>,
			<SectionCardList section={Completed}/>
		]
	},
	"Blog": {
		href: "/blog",
		icon: <BookRounded/>,
		content: [
			<SectionCardList section={DataAbout}/>
		]
	}
}

export const usePage = (title: string) => {
	const info = pages[title]
	if (!info) {
		throw new Error(`Page ${title} not found`)
	}
	return info
}