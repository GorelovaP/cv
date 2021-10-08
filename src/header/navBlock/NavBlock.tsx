import React from 'react';
import s from "./NavBlock.module.css"

export const NavBlock = ()=>
{
    return (
        <div className={s.navBlock}>
            <a href="#">Home</a>
            <a href="#">Skills</a>
            <a href="#">Portfolio</a>
            <a href="#">Contact</a>
        </div>
    );
}

