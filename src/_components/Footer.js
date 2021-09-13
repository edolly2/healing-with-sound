import React from 'react';
import style from './Footer.module.css';
import {FaFacebook} from 'react-icons/fa';
import {AiFillTwitterCircle, AiOutlineLinkedin, AiOutlineGithub} from 'react-icons/ai'

const Footer = () => {
    return (
        <footer className={style.footer}>
            <FaFacebook className="socialIcons"/>
            <AiFillTwitterCircle className="socialIcons"/>
            <AiOutlineLinkedin className="socialIcons"/>
            <AiOutlineGithub className="socialIcons"/>
        </footer>
    );
}

export default Footer;