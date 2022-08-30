import React, { FC } from 'react'

import classes from './FilterCheckbox.module.scss'

interface FilterCheckboxProps {
	value: boolean
	onChange: Function
}

const FilterCheckbox: FC<FilterCheckboxProps> = ({ value, onChange }) => {
	return (
		<input
			type='checkbox'
			checked={value}
		/>
	)
}

export default FilterCheckbox
