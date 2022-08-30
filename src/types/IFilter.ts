import { Status, Species, Gender } from "./ICharacter"

export interface IFilter {
    name: string
    page: 0
    status: {
        name: Status
        value: boolean
    }[]
    species: {
        name: Species
        value: boolean
    }[]
    gender: {
        name: Gender
        value: boolean
    }[]
}