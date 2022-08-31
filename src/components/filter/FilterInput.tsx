import { FC, useEffect, useState } from 'react'

import { useAppDispatch } from '../../hooks/redux'
import useDebounce from '../../hooks/use-debounce'
import { characterSlice } from '../../store/slices/characterSlice'

import classes from './FilterInput.module.scss'

const FilterInput: FC = () => {
	const dispatch = useAppDispatch()

	const [value, setValue] = useState('')

	const debouncedValue = useDebounce(value, 500)

	useEffect(() => {
		dispatch(characterSlice.actions.setSearchName(debouncedValue))
	}, [debouncedValue])

	return (
		<input
			type='text'
			placeholder='Введите имя персонажа...'
            className={classes.input}
			value={value}
            onChange={(e) => setValue(e.target.value)}
		/>
	)
}

export default FilterInput
