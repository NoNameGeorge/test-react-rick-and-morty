import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ICharacter } from '../../types/ICharacter'

interface CharacterState {
	isLoading: boolean
	error: string
	list: ICharacter[]
	activeCharacter: ICharacter | null
}

const initialState: CharacterState = {
	isLoading: false,
	error: '',
	list: [],
	activeCharacter: null,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setLoading(state, action: PayloadAction<boolean>) {
			state.isLoading = action.payload
		},
		setError(state, action: PayloadAction<string>) {
			state.error = action.payload ? action.payload : 'Произошла непредвиденная ошибка'
		},
		clear(state) {
			state.isLoading = false
			state.error = ''
		},
		setCharacters(state, action: PayloadAction<ICharacter[]>) {
			state.list = action.payload
		},
		addCharacters(state, action: PayloadAction<ICharacter[]>) {
			state.list.push(...action.payload)
		},
		setActiveCharacter(state, action: PayloadAction<ICharacter | null>) {
			state.activeCharacter = action.payload
		},
	},
})

export default userSlice.reducer
