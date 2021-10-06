import React from 'react';
import s from "./Header.module.css"
import {NavBlock} from "./navBlock/NavBlock";


export const Header = ()=>
{
    return (
        <div className={s.header}>
                <NavBlock/>
        </div>

    );
}

