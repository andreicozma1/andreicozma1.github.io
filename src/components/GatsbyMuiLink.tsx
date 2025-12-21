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

// Gatsby-compatible Link component
type GatsbyMuiLinkProps = Omit<MuiLinkProps, 'href'> & {
	href?: string
	to?: string
}

export const Link = React.forwardRef<HTMLAnchorElement, GatsbyMuiLinkProps>(
	({ href, to, children, ...props }, ref) => {
		const destination = to || href || "/"
		const isInternal = destination.startsWith("/") || destination.startsWith("#")

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

		return (
			<MuiLink href={destination} ref={ref} {...props}>
				{children}
			</MuiLink>
		)
	}
)

Link.displayName = "Link"

// Gatsby-compatible Button component
type GatsbyMuiButtonProps = Omit<MuiButtonProps, 'href'> & {
	href?: string
	to?: string
}

export const Button = React.forwardRef<HTMLButtonElement, GatsbyMuiButtonProps>(
	({ href, to, children, ...props }, ref) => {
		const destination = to || href

		if (destination) {
			const isInternal = destination.startsWith("/") || destination.startsWith("#")

			if (isInternal) {
				return (
					<MuiButton
						component={GatsbyLink}
						to={destination}
						ref={ref}
						{...props}
					>
						{children}
					</MuiButton>
				)
			}

			return (
				<MuiButton href={destination} ref={ref} {...props}>
					{children}
				</MuiButton>
			)
		}

		return (
			<MuiButton ref={ref} {...props}>
				{children}
			</MuiButton>
		)
	}
)

Button.displayName = "Button"

// Gatsby-compatible IconButton component
type GatsbyMuiIconButtonProps = Omit<MuiIconButtonProps, 'href'> & {
	href?: string
	to?: string
}

export const IconButton = React.forwardRef<HTMLButtonElement, GatsbyMuiIconButtonProps>(
	({ href, to, children, ...props }, ref) => {
		const destination = to || href

		if (destination) {
			const isInternal = destination.startsWith("/") || destination.startsWith("#")

			if (isInternal) {
				return (
					<MuiIconButton
						component={GatsbyLink}
						to={destination}
						ref={ref}
						{...props}
					>
						{children}
					</MuiIconButton>
				)
			}

			return (
				<MuiIconButton href={destination} ref={ref} {...props}>
					{children}
				</MuiIconButton>
			)
		}

		return (
			<MuiIconButton ref={ref} {...props}>
				{children}
			</MuiIconButton>
		)
	}
)

IconButton.displayName = "IconButton"
