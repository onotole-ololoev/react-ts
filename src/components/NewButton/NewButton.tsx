import React from 'react';

type NewButtonType = {
    name: string
    callBack: () => void
}


const NewButton = (props: NewButtonType) => {

    const onClickHandler = () => {
        props.callBack();
    }
    return (
        <button onClick={onClickHandler}>{props.name}</button>
    );
};

export default NewButton;