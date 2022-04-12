import React from 'react';


type FilterComponentType = {
    onClick: (filterName: "All" | "RUBLS" | "Dollars") => void
    currentMoney: Array<CurrentMoneyType>
}

type CurrentMoneyType = {
    banknots: string,
    value: number,
    number: string
}


const FilterComponent = (props: FilterComponentType) => {
    return (
        <div>
            <ul>
                {props.currentMoney.map(m => {
                    return (
                        <li key={m.number}>{m.value} {m.banknots} {m.number}</li>
                    )
                })}
            </ul>
            <button onClick={() => props.onClick("All")}>all</button>
            <button onClick={() => props.onClick("RUBLS")}>ruble</button>
            <button onClick={() => props.onClick("Dollars")}>dollar</button>
        </div>
    );
};

export default FilterComponent;