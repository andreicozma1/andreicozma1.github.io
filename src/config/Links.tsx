import linkConfig from "../data/links.json"

export interface LinkProps {
	icon: string,
	name: string,
	href: string,
	target?: string,
}

const Links: { [key: string]: LinkProps } = {
	...linkConfig
}
export default Links