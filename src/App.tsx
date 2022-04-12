import React, {useState} from 'react';
import './App.css';
import MicroTasks from "./components/MicroTasks/MicroTasks";
import Button from "./components/Button/Button";
import FilterComponent from "./components/FilterComponent/FilterComponent";
import FullInput from "./components/Input/FullInput";
import NewInput from "./components/NewInput/NewInput";
import NewButton from "./components/NewButton/NewButton";



function App() {
    let [cars, setCars] = useState([
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ])

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])



    type FilterType = "All" | "RUBLS" | "Dollars";

    let [filter, setFilter] = useState<FilterType>("All")

    let currentMoney = money;

    if  (filter === 'RUBLS') {
        currentMoney = currentMoney.filter(m => m.banknots === "RUBLS");
    }
    if (filter === 'Dollars') {
        currentMoney = currentMoney.filter(m => m.banknots === 'Dollars');
    }


    const onFilterHandle = (nameButton: FilterType) => {
        setFilter(nameButton);
    }


    const btn_1 = (sub: string, age: number, city: string) => {
        console.log(sub, age, city)
    }
    const btn_2 = (sub: string) => {
        console.log(sub)
    }
    const btn_3 = () => {
        console.log("I am stupid Btn")
    }

    let [a, setA] = useState(1);

    const addHandle = () => {
        setA(++a)
    }
    const resetHandle = () => {
        setA(a = 0);
    }

    // microtasks Input
    const [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])
    let [title, setTitle] = useState('');

    const addMessage = () => {
        addNewMessage(title);
    }
    const addNewMessage = (title: string) => {
        setMessage([{message: title}, ...message])
    }

    return (
        <div className="App">
            <MicroTasks cars={cars}/>
            <div className={'block'}>
                <Button callBack={() => btn_1('Vasya', 36, 'Minsk')} name={'My YouTube chanel-1'}/>
                <Button callBack={() => btn_2('Ivan')} name={'My YouTube chanel-2'}/>
                <Button callBack={btn_3} name={'Stupid Btn'}/>
                <div>{a}</div>
                <button onClick={addHandle}>add</button>
                <button onClick={resetHandle}>reset</button>
            </div>
            <div className={'block'}>
                {/*<ul>*/}
                {/*    {currentMoney.map(m => {*/}
                {/*        return (*/}
                {/*            <li key={m.number}>{m.value} {m.banknots} {m.number}</li>*/}
                {/*        )*/}
                {/*    })}*/}
                {/*</ul>*/}
                {/*<button onClick={() => onFilterHandle("All")}>all</button>*/}
                {/*<button onClick={() => onFilterHandle("RUBLS")}>ruble</button>*/}
                {/*<button onClick={() => onFilterHandle("Dollars")}>dollar</button>*/}
                <FilterComponent onClick={onFilterHandle} currentMoney={currentMoney}/>
                microTasks Input ========================================================
                <div className='fullInput'>
                    <h2>MicroTasksInput</h2>
                    {/*<FullInput addMessage={addMessage}/>*/}
                    <NewInput />
                    <NewButton callBack={addMessage} name='add text'/>
                    {message.map((m, i) => {
                        return (
                            <div key={i}>{m.message}</div>
                        )
                    })}
                </div>

            </div>

        </div>
    );
}


export default App;
