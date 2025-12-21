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
          buildTime
          commitSha
        }
      }
    }
  `)

	return data.site.siteMetadata
}

/**
 * Formats an ISO date string to a human-readable format (e.g., "Dec 21, 2025").
 * Returns "Unknown" if the date string is invalid.
 * Note: new Date() doesn't throw for invalid strings - it returns Invalid Date,
 * so we check validity using isNaN(date.getTime()).
 */
export const formatBuildDate = (isoString: string): string => {
	const date = new Date(isoString)
	if (isNaN(date.getTime())) {
		return "Unknown"
	}
	return date.toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric"
	})
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