/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/
import React from "react"
import { Link as GatsbyLink } from "gatsby"
import {
	Button as MuiButton,
	ButtonProps as MuiButtonProps,
	IconButton as MuiIconButton,
	IconButtonProps as MuiIconButtonProps,
	Link as MuiLink,
	LinkProps as MuiLinkProps
} from "@mui/material"

// Helper to check if a URL is internal
// Excludes protocol-relative URLs (//example.com) which should be treated as external
const isInternalLink = (url: string): boolean => {
	return (url.startsWith("/") && !url.startsWith("//")) || url.startsWith("#")
}

// Gatsby-compatible Link component
type GatsbyMuiLinkProps = Omit<MuiLinkProps, 'href'> & {
	href?: string
	to?: string
}

export const Link = React.forwardRef<HTMLAnchorElement, GatsbyMuiLinkProps>(
	({ href, to, children, target, ...props }, ref) => {
		const destination = to || href || "/"
		const isInternal = isInternalLink(destination)

		if (isInternal) {
			return (
				<MuiLink
					component={GatsbyLink}
					to={destination}
					ref={ref}
					{...props}
				>
					{children}
				</MuiLink>
			)
		}

		// External links get security attributes
		return (
			<MuiLink
				href={destination}
				ref={ref}
				target={target ?? "_blank"}
				rel="noopener noreferrer"
				{...props}
			>
				{children}
			</MuiLink>
		)
	}
)

Link.displayName = "Link"

// Gatsby-compatible Button component
type GatsbyMuiButtonProps = Omit<MuiButtonProps<"button">, 'href'> & {
	href?: string
	to?: string
	target?: string
}

export const Button: React.FC<GatsbyMuiButtonProps> = ({ href, to, children, target, ...props }) => {
	const destination = to || href

	if (destination) {
		if (isInternalLink(destination)) {
			return (
				<MuiButton
					component={GatsbyLink}
					to={destination}
					{...props}
				>
					{children}
				</MuiButton>
			)
		}

		// External links get security attributes
		return (
			<MuiButton
				component="a"
				href={destination}
				target={target ?? "_blank"}
				rel="noopener noreferrer"
				{...props}
			>
				{children}
			</MuiButton>
		)
	}

	return (
		<MuiButton {...props}>
			{children}
		</MuiButton>
	)
}

Button.displayName = "Button"

// Gatsby-compatible IconButton component
type GatsbyMuiIconButtonProps = Omit<MuiIconButtonProps<"button">, 'href'> & {
	href?: string
	to?: string
	target?: string
}

export const IconButton: React.FC<GatsbyMuiIconButtonProps> = ({ href, to, children, target, ...props }) => {
	const destination = to || href

	if (destination) {
		if (isInternalLink(destination)) {
			return (
				<MuiIconButton
					component={GatsbyLink}
					to={destination}
					{...props}
				>
					{children}
				</MuiIconButton>
			)
		}

		// External links get security attributes
		return (
			<MuiIconButton
				component="a"
				href={destination}
				target={target ?? "_blank"}
				rel="noopener noreferrer"
				{...props}
			>
				{children}
			</MuiIconButton>
		)
	}

	return (
		<MuiIconButton {...props}>
			{children}
		</MuiIconButton>
	)
}

IconButton.displayName = "IconButton"
