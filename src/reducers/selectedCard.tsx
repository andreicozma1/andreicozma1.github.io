import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ReactNode } from "react"
import { TemplateDataCardProps } from "../components/TemplatedDataProps"

export interface SelectedCardState {
	itemProps?: TemplateDataCardProps,
	children?: ReactNode,
	maxWidth?: string
}

export const selectedCard = createSlice({
	name        : "selectedCard",
	initialState: null as SelectedCardState | null,
	reducers    : {
		setCardData: (_state: SelectedCardState | null, action: PayloadAction<SelectedCardState | null>) => {
			return action.payload
		}
	}
})

export const { setCardData } = selectedCard.actions

export default selectedCard.reducer