import React from 'react';
import style from './MocroTasks.module.css'

type CarsType = {
    cars: Array<ModelsType>
}

type ModelsType = {
    manufacturer: string
    model: string
}

const MicroTasks = (props: CarsType) => {

    return (
        <table className={style.main}>
            {props.cars.map((c, index) => {
                return (
                    <tr key={index + 1} className={style.string}>
                        <th className={style.row}>{index + 1}</th>
                        <th className={style.row}>{c.manufacturer}</th>
                        <th className={style.row}>{c.model}</th>
                    </tr>
                )
            })}

        </table>

    );
};

export default MicroTasks;