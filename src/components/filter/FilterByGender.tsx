import { FC } from 'react'

import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { characterSlice } from '../../store/slices/characterSlice'
import { Gender } from '../../types/ICharacter'

import FilterCheckbox from './FilterCheckbox'

import classes from './FilterItems.module.scss'

const FilterByGender: FC = () => {
	const dispacth = useAppDispatch()

	const { gender } = useAppSelector((state) => state.character.filterSettings)

	const handleChanges = (name: Gender) => {
		dispacth(characterSlice.actions.toggleGender(name))
	}

	return (
		<div className={classes.wrapper}>
			<div className={classes.title}>Выберите пол персонажа:</div>
			<div className={classes.inner}>
				{gender &&
					gender.map((genderItem) => {
						return (
							<FilterCheckbox
								key={`filter-by-status-${genderItem.name}`}
								name={genderItem.name}
								value={genderItem.value}
								onChange={handleChanges}
							/>
						)
					})}
			</div>
		</div>
	)
}

export default FilterByGender
