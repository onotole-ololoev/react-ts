import React from 'react';

type ButtonType = {
    name: string
    callBack: () => void
}

const Button = (props: ButtonType) => {

    const onClickHandle = () => {
        props.callBack();
    }

    return (
        <div>
            <button onClick={onClickHandle}>{props.name}</button>
        </div>
    );
};

export default Button;