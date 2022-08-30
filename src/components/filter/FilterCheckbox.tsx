import React, { FC } from 'react'

import classes from './FilterCheckbox.module.scss'

interface FilterCheckboxProps {
	name: string
	value: boolean
	onChange: Function
}

const FilterCheckbox: FC<FilterCheckboxProps> = ({ value, onChange, name }) => {
	return (
		<div
			className={`${classes.wrapper} ${value ? classes.active : ''}`}
			onClick={() => onChange(name)}
		>
			<span>{name}</span>
		</div>
	)
}

export default FilterCheckbox
