import { Status, Species, Gender } from "./ICharacter"

export interface StatusList {
    name: Status
    value: boolean
}

export interface SpeciesList {
    name: Species
    value: boolean
}

export interface GenderList {
    name: Gender
    value: boolean
}

export interface IFilter {
    name: string
    page: number
    status: StatusList[]
    species: SpeciesList[]
    gender: GenderList[]
}