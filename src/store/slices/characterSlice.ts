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
	activeCharacter: {
		id: 1,
		name: 'Rick Sanchez',
		status: 'Alive',
		species: 'Human',
		type: '',
		gender: 'Male',
		origin: {
			name: 'Earth (C-137)',
			url: 'https://rickandmortyapi.com/api/location/1',
		},
		location: {
			name: 'Citadel of Ricks',
			url: 'https://rickandmortyapi.com/api/location/3',
		},
		image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
		episode: [
			'https://rickandmortyapi.com/api/episode/1',
			'https://rickandmortyapi.com/api/episode/2',
			'https://rickandmortyapi.com/api/episode/3',
			'https://rickandmortyapi.com/api/episode/4',
			'https://rickandmortyapi.com/api/episode/5',
			'https://rickandmortyapi.com/api/episode/6',
			'https://rickandmortyapi.com/api/episode/7',
			'https://rickandmortyapi.com/api/episode/8',
			'https://rickandmortyapi.com/api/episode/9',
			'https://rickandmortyapi.com/api/episode/10',
			'https://rickandmortyapi.com/api/episode/11',
			'https://rickandmortyapi.com/api/episode/12',
			'https://rickandmortyapi.com/api/episode/13',
			'https://rickandmortyapi.com/api/episode/14',
			'https://rickandmortyapi.com/api/episode/15',
			'https://rickandmortyapi.com/api/episode/16',
			'https://rickandmortyapi.com/api/episode/17',
			'https://rickandmortyapi.com/api/episode/18',
			'https://rickandmortyapi.com/api/episode/19',
			'https://rickandmortyapi.com/api/episode/20',
			'https://rickandmortyapi.com/api/episode/21',
			'https://rickandmortyapi.com/api/episode/22',
			'https://rickandmortyapi.com/api/episode/23',
			'https://rickandmortyapi.com/api/episode/24',
			'https://rickandmortyapi.com/api/episode/25',
			'https://rickandmortyapi.com/api/episode/26',
			'https://rickandmortyapi.com/api/episode/27',
			'https://rickandmortyapi.com/api/episode/28',
			'https://rickandmortyapi.com/api/episode/29',
			'https://rickandmortyapi.com/api/episode/30',
			'https://rickandmortyapi.com/api/episode/31',
			'https://rickandmortyapi.com/api/episode/32',
			'https://rickandmortyapi.com/api/episode/33',
			'https://rickandmortyapi.com/api/episode/34',
			'https://rickandmortyapi.com/api/episode/35',
			'https://rickandmortyapi.com/api/episode/36',
			'https://rickandmortyapi.com/api/episode/37',
			'https://rickandmortyapi.com/api/episode/38',
			'https://rickandmortyapi.com/api/episode/39',
			'https://rickandmortyapi.com/api/episode/40',
			'https://rickandmortyapi.com/api/episode/41',
			'https://rickandmortyapi.com/api/episode/42',
			'https://rickandmortyapi.com/api/episode/43',
			'https://rickandmortyapi.com/api/episode/44',
			'https://rickandmortyapi.com/api/episode/45',
			'https://rickandmortyapi.com/api/episode/46',
			'https://rickandmortyapi.com/api/episode/47',
			'https://rickandmortyapi.com/api/episode/48',
			'https://rickandmortyapi.com/api/episode/49',
			'https://rickandmortyapi.com/api/episode/50',
			'https://rickandmortyapi.com/api/episode/51',
		],
		url: 'https://rickandmortyapi.com/api/character/1',
		created: '2017-11-04T18:48:46.250Z',
	},
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
