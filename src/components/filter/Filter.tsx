import { FC, useState } from 'react';

import FilterInput from './FilterInput';

import classes from './Filter.module.scss'
import FilterByStatus from './FilterByStatus';

const Filter: FC = () => {
    const [name, setName] = useState('')
    // const [status, setStatus] = useState(false)
    // const [species, setSpecies] = useState(false)
    // const [gender, setGender] = useState(false)

    return (
        <div className={classes.wrapper}>
            <h1 className={classes.title}>Найдите своего любимого героя "The Rick and Morty":</h1>
            <FilterInput 
                placeholder='Введите имя персонажа...'
                value={name}
                onChange={setName}
            />
            <FilterByStatus />
            {/* <FilterByGender />
            <FilterBySpecies />

            <div className={classes.subtitle}>Выберите пол персонажа:</div>

            <div className={classes.subtitle}>Выберите вид персонажа:</div> */}

        </div>
    );
};

export default Filter;