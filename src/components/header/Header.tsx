import React from 'react';
import {NavLink, useMatch} from 'react-router-dom';
import {PATH} from '../../common/pages/Pages';
import s from "./Header.module.css"


export const Header = () => {
    const match = useMatch('/:routeKey');
    return (
        <div className={s.header}>
            <div className={s.navBlock}>
                <NavLink
                    className={`${s.navBlock__item} ${match?.params.routeKey === "/home" ? s.active : undefined}`}
                    to={"/home"}> Home </NavLink>
                <NavLink
                    className={`${s.navBlock__item} ${match?.params.routeKey === PATH.SKILLS ? s.active : undefined}`}
                    to={PATH.SKILLS}> Skills </NavLink>
                <NavLink className={`${s.navBlock__item} ${match?.params.routeKey === PATH.PORTFOLIO ? s.active : ''}`}
                         to={PATH.PORTFOLIO}> Portfolio </NavLink>
                <NavLink className={`${s.navBlock__item} ${match?.params.routeKey === PATH.CONTACTS ? s.active : ''}`}
                         to={PATH.CONTACTS}> Contact </NavLink>
            </div>
        </div>
    );
}

