import { Icons } from "./config/Icons"
import { Icon } from "@mui/material"
import * as React from "react"
import { Pages } from "./config/Pages"
import { LinkProps } from "./config/Links"

import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
	const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
		  siteUrl
          image
          title
          description
        }
      }
    }
  `)

	return data.site.siteMetadata
}

export const usePage = (title: string) => {
	const info = Pages[title]
	if (!info) {
		throw new Error(`Page ${title} not found`)
	}
	return info
}

export const useIcon = (name: string) => {
	if (!name.startsWith("ic_")) return <Icon>{name}</Icon>
	if (!Icons[name]) {
		console.warn(`${name} is not in IconsConfig`)
		return <Icon>question_mark</Icon>
	}
	return Icons[name]
}

export const gotoLink = (link: LinkProps) => {
	let target = link.target || "_blank"
	window.open(link.href, target)
}

export const scrollToTop = () => {
	window.scrollTo({
		top     : 0,
		behavior: "smooth"
	})
}

export const scrollToBottom = () => {
	window.scrollTo({
		top     : document.body.scrollHeight,
		behavior: "smooth"
	})
}

export const scrollToAnchor = (title: string) => {
	title = title.replace(/,/g, "").replace(/&/g, "").replace(/  /g, " ").replace(/ /g, "-").toLowerCase()
	const section = document.querySelector("#" + title)
	if (section) section.scrollIntoView({
		behavior: "smooth",
		block   : "start"
	})
}