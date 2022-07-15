/*
Author: Andrei Cozma
Website: https://andreicozma.com
Github Repository: https://github.com/andreicozma1/andreicozma1.github.io
*/

// https://www.schemecolor.com/gold-blue-color-combination.php
import { Variant } from "@mui/material/styles/createTypography"
import { IconProps } from "@mui/material"

declare module "@mui/material/styles" {
	// fix the type error when referencing the Theme object in your styled component
	interface Theme {
		transitionDuration: {
			topbar: number
			avatar: number
			page: number
			breadcrumb: number
			notes: number
		};
		particles: {
			filter: string
		};
		avatar: {
			borderSize: string
			size: string
		};
		topbar: {
			opacity: number
			selectedFontWeight: string
			hiddenOpacity: number
			spacing: number
		}
		section: {
			titleVariant: Variant
			titleFontWeight: string
			itemSpacing: number
			verticalMargin: number
		}
		card: {
			elevation: number
			fontWeight: string
			iconColor: IconProps["color"]
			spacing: number
			headerOpacity: number
			contentOpacity: number
			titleFontSize: number | string
			subheaderFontSize: number | string
			contentFontSize: number | string
			contentPaddingH: number | string
			contentPaddingV: number | string
			chipFontSize: number | string
			chipHeight: number | string
			paragraphSpacing: number | string
		}
	}

	// fix the type error when calling `createTheme()` with a custom theme option
	interface ThemeOptions {
		transitionDuration: {
			topbar: number
			avatar: number
			page: number
			breadcrumb: number
			notes: number
		};
		particles: {
			filter: string
		};
		avatar: {
			borderSize: string
			size: string
		};
		topbar: {
			opacity: number
			selectedFontWeight: string
			hiddenOpacity: number
			spacing: number
		}
		section: {
			titleVariant: Variant
			titleFontWeight: string
			itemSpacing: number
			verticalMargin: number
		}
		card: {
			elevation: number
			fontWeight: string
			iconColor: IconProps["color"]
			spacing: number
			headerOpacity: number
			contentOpacity: number
			titleFontSize: number | string
			subheaderFontSize: number | string
			contentFontSize: number | string
			contentPaddingH: number | string
			contentPaddingV: number | string
			chipFontSize: number | string
			chipHeight: number | string
			paragraphSpacing: number | string
		}
	}
}