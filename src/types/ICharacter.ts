export type Status = 'Alive' | 'Dead' | 'unknown'
export type Gender = 'Female' | 'Male' | 'Genderless' | 'unknown'
export type Species =
	| 'Human'
	| 'Alien'
	| 'Humanoid'
	| 'unknown'
	| 'Poopybutthole'
	| 'Animal'
	| 'Robot'
	| 'Cronenberg'
	| 'Disease'
	| 'Mythological Creature'

export interface ICharacter {
	id: number
	name: string
	status: Status
	species: Species
	type: string
	gender: Gender
	origin: {
		name: string
		url: string
	}
	location: {
		name: string
		url: string
	}
	image: string
	episode: string[]
	url: string
	created: string
}
