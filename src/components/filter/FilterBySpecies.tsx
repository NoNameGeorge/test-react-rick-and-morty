import { FC } from 'react'

import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { characterSlice } from '../../store/slices/characterSlice'
import { Species } from '../../types/ICharacter'

import FilterCheckbox from './FilterCheckbox'

import classes from './FilterItems.module.scss'

const FilterBySpecies: FC = () => {
	const dispacth = useAppDispatch()

	const { species } = useAppSelector((state) => state.character.filterSettings)

	const handleChanges = (name: Species) => {
		dispacth(characterSlice.actions.toggleSpecies(name))
	}

	return (
		<div className={classes.wrapper}>
			<div className={classes.title}>Выберите вид персонажа:</div>
			<div className={classes.inner}>
				{species &&
					species.map((speciesItem) => {
						return (
							<FilterCheckbox
								key={`filter-by-status-${speciesItem.name}`}
								name={speciesItem.name}
								value={speciesItem.value}
								onChange={handleChanges}
							/>
						)
					})}
			</div>
		</div>
	)
}

export default FilterBySpecies
