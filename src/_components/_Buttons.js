import React from 'react';

const Button = (props) => {
    return (
        <button className="btn enterBtn">{props.text}</button>
    );
}

export default Button;