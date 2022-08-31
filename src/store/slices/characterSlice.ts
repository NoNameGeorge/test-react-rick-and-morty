import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Gender, ICharacter, Species, Status } from '../../types/ICharacter'
import { IFilter } from '../../types/IFilter'

interface CharacterState {
	isLoading: boolean
	error: string
	activeCharacter: ICharacter | null
	list: ICharacter[]
	filterSettings: IFilter
}

const initialState: CharacterState = {
	isLoading: false,
	error: '',
	list: [],
	activeCharacter: null,
	filterSettings: {
		name: '',
		page: 1,
		status: [
			{ name: 'Alive', value: false },
			{ name: 'Dead', value: false },
			{ name: 'unknown', value: false },
		],
		gender: [
			{ name: 'Female', value: false },
			{ name: 'Male', value: false },
			{ name: 'Genderless', value: false },
			{ name: 'unknown', value: false },
		],
		species: [
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
		toggleStatus(state, action: PayloadAction<Status>) {
			state.filterSettings.status = state.filterSettings.status.map((item) => {
				return {
					...item,
					value: item.name === action.payload ? !item.value : false,
				}
			})
		},
		toggleGender(state, action: PayloadAction<Gender>) {
			state.filterSettings.gender = state.filterSettings.gender.map((item) => {
				return {
					...item,
					value: item.name === action.payload ? !item.value : false,
				}
			})
		},
		toggleSpecies(state, action: PayloadAction<Species>) {
			state.filterSettings.species = state.filterSettings.species.map((item) => {
				return {
					...item,
					value: item.name === action.payload ? !item.value : false,
				}
			})
		},
		setSearchName(state, action: PayloadAction<string>) {
			state.filterSettings.name = action.payload
		},
		setPage(state, action: PayloadAction<number>) {
			state.filterSettings.page = action.payload
		},
	},
})

export default characterSlice.reducer
