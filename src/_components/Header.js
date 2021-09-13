import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <h1>Heal Yourself With The Power Of Sound...</h1>
            <p>By: Eric Dollinger</p>
        </header>
    );
}

export default Header;