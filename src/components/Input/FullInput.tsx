import React, {ChangeEvent, useState} from 'react';


type FullInputTitle = {
    addMessage: (title: string) => void
}

const FullInput = (props: FullInputTitle) => {

    let [title, setTitle] = useState('');

    const onchangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)

    }

    const addMessageHandle = () => {
        props.addMessage(title);
        setTitle('');
    }


    return (
        <div>
            <input value={title} onChange={onchangeInputHandler}/>
            <button onClick={addMessageHandle}>+</button>
        </div>
    );
};

export default FullInput;