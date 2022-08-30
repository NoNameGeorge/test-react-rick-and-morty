import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ICharacter, IStatus } from '../../types/ICharacter'

interface CharacterState {
	isLoading: boolean
	error: string
	activeCharacter: ICharacter | null
	list: ICharacter[]
	filterSettings: {
		name: string
		page: 0
		status: IStatus[]
		species: IStatus[]
		gender: IStatus[]
	}
}

const initialState: CharacterState = {
	isLoading: false,
	error: '',
	list: [],
	activeCharacter: null,
	filterSettings: {
		name: '',
		page: 0,
		status: [
			{ name: 'Alive', value: false },
			{ name: 'Dead', value: false },
			{ name: 'unknown', value: false },
		],
		species: [
			{ name: 'Female', value: false },
			{ name: 'Male', value: false },
			{ name: 'Genderless', value: false },
			{ name: 'unknown', value: false },
		],
		gender: [
			{ name: 'Human', value: false },
			{ name: 'Alien', value: false },
			{ name: 'Humanoid', value: false },
			{ name: 'Poopybutthole', value: false },
			{ name: 'Animal', value: false },
			{ name: 'Robot', value: false },
			{ name: 'Cronenberg', value: false },
			{ name: 'Disease', value: false },
			{ name: 'Mythological Creature', value: false },
			{ name: 'unknown', value: false },
		],
	},
}

export const characterSlice = createSlice({
	name: 'character',
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
		// setPage(state, action: PayloadAction<number>) {
		// 	state.page = action.payload
		// },
	},
})

export default characterSlice.reducer