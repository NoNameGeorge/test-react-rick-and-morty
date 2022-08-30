import { FC } from 'react'

import classes from './FilterInput.module.scss'

interface FilterInputProps {
	placeholder: string
	value: string
	onChange: Function
}

const FilterInput: FC<FilterInputProps> = ({ placeholder, value, onChange }) => {
	return (
		<input
			type='text'
            className={classes.input}
			placeholder={placeholder}
			value={value}
            onChange={(e) => onChange(e.target.value)}
		/>
	)
}

export default FilterInput
