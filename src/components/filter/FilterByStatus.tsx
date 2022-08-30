import { FC, useState } from 'react'

import { IStatus } from '../../types/ICharacter'
import { useAppSelector } from '../../hooks/redux'

import FilterCheckbox from './FilterCheckbox'

import classes from './FilterByStatus.module.scss'

const FilterByStatus: FC = () => {
	const { status } = useAppSelector((state) => state.character.filterSettings)

	const handleChanges = (name: string) => {}

	return (
		<div className={classes.wrapper}>
			<div className={classes.title}>Выберите статус персонажа:</div>
			<div className={classes.inner}>
				{status &&
					status.map((statusItem) => {
						return (
							<FilterCheckbox
								key={`filter-by-status-${statusItem.name}`}
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
