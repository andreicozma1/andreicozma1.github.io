import { createTheme, IconProps } from "@mui/material"
import { Variant } from "@mui/material/styles/createTypography"

// https://www.schemecolor.com/gold-blue-color-combination.php
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
			titleFontSize: number
			subheaderFontSize: number
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
			titleFontSize: number
			subheaderFontSize: number
		}
	}

}

const theme = createTheme({
	spacing           : 8,
	palette           : {
		primary   : {
			main: "#002233"
		},
		secondary : {
			main : "#e9bd6c",
			light: "#ebd5ac",
			dark : "#e7a52c"
		},
		background: {
			default: "#ededed"
		}
	},
	transitionDuration: {
		topbar    : 500,
		avatar    : 1000,
		breadcrumb: 1500,
		page      : 250,
		notes     : 1000
	},
	avatar            : {
		borderSize: "0.75rem",
		size      : "25vh"
	},
	topbar            : {
		opacity           : 0.99,
		selectedFontWeight: "bold",
		hiddenOpacity     : 0.5,
		spacing           : 1
	},
	particles         : {
		filter: "blur(20px)"
	},
	section           : {
		titleVariant   : "h5",
		titleFontWeight: "medium",
		itemSpacing    : 1,
		verticalMargin : 3
	},
	card              : {
		elevation        : 4,
		fontWeight       : "medium",
		iconColor        : "primary",
		spacing          : 1,
		headerOpacity    : 0.99,
		contentOpacity   : 0.6,
		titleFontSize    : 16,
		subheaderFontSize: 15
	}
})

export default theme