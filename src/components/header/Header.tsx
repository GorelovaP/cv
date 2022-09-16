import React from 'react';
import {NavLink, useMatch} from 'react-router-dom';
import {PATH} from '../../common/pages/Pages';
import s from "./Header.module.css"


export const Header = () => {
    const match = useMatch('/:routeKey');
    console.log(match?.params.routeKey)
    return (
        <div className={s.header}>
            <div className={s.navBlock}>
                <NavLink
                    className={`${s.navBlock__item} ${match?.params.routeKey === "home" ? s.navBlock__item_active : ""}`}
                    to={PATH.HOME}> Home </NavLink>
                <NavLink
                    className={`${s.navBlock__item} ${match?.params.routeKey ===  "skills" ? s.navBlock__item_active : ""}`}
                    to={PATH.SKILLS}> Skills </NavLink>
                <NavLink
                    className={`${s.navBlock__item} ${match?.params.routeKey === "portfolio" ? s.navBlock__item_active : ''}`}
                    to={PATH.PORTFOLIO}> Portfolio </NavLink>
                <NavLink
                    className={`${s.navBlock__item} ${match?.params.routeKey === "contacts" ? s.navBlock__item_active : ''}`}
                    to={PATH.CONTACTS}> Contact </NavLink>
            </div>
        </div>
    );
}

