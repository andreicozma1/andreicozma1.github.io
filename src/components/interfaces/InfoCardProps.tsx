import { ReactNode } from "react"

export interface InfoCardProps {
	title: string,
	subtitle?: string,
	avatar: ReactNode,
	chips?: string | string[],
	content?: string | string[]
}