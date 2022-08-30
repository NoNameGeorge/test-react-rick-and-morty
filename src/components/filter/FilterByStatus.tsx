import { FC } from 'react'

import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { characterSlice } from '../../store/slices/characterSlice'
import { Status } from '../../types/ICharacter'

import FilterCheckbox from './FilterCheckbox'

import classes from './FilterItems.module.scss'

const FilterByStatus: FC = () => {
	const dispacth = useAppDispatch()

	const { status } = useAppSelector((state) => state.character.filterSettings)

	const handleChanges = (name: Status) => {
		dispacth(characterSlice.actions.toggleStatus(name))
	}

	return (
		<div className={classes.wrapper}>
			<div className={classes.title}>Выберите статус персонажа:</div>
			<div className={classes.inner}>
				{status &&
					status.map((statusItem) => {
						return (
							<FilterCheckbox
								key={`filter-by-status-${statusItem.name}`}
								name={statusItem.name}
								value={statusItem.value}
								onChange={handleChanges}
							/>
						)
					})}
			</div>
		</div>
	)
}

export default FilterByStatus
