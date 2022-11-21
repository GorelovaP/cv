import React, {useState} from 'react';
import {NavLink, useMatch} from 'react-router-dom';
import {PATH} from '../../common/pages/Pages';
import s from "./Header.module.scss"
import {Burger} from "../../common/burger/Burger";
import home from "../../sources/images/header/home.png"
import homeActive from "../../sources/images/header/homeActive.png"
import me from "../../sources/images/header/me.png"
import meActive from "../../sources/images/header/meActive.png"
import portfolio from "../../sources/images/header/portfolio.png"
import portfolioActive from "../../sources/images/header/portfolioActive.png"
import contacts from "../../sources/images/header/contact.png"
import contactsActive from "../../sources/images/header/contactActive.png"


export const Header = () => {
    const match = useMatch('/:routeKey');

    let [active, setActive] = useState(false)

    return (
        <div className={`${s.header} ${active ? s.header_active : ""}`}>
            <Burger className={s.burger} onclick={setActive} active={active}/>
            <div className={s.navBlock}>
                <NavLink
                    className={`${s.navBlock__item} ${match?.params.routeKey === "home" ? s.navBlock__item_active : ""} ${active ? s.navBlock__item_activeB : ""} `}
                    to={PATH.HOME}
                    onClick={() => setActive(false)}>
                    <div className={s.navBlock__item__text}>Home</div>
                    <img alt="Home" className={s.item__image}
                         src={match?.params.routeKey === "home" && active ? homeActive : home}/>
                    {active ? "Home" : ""}
                </NavLink>

                <NavLink
                    className={`${s.navBlock__item} ${match?.params.routeKey === "skills" ? s.navBlock__item_active : ""} ${active ? s.navBlock__item_activeB : ""}`}
                    to={PATH.SKILLS}
                    onClick={() => setActive(false)}
                >
                    <div className={s.navBlock__item__text + " " + s.skills}><span>About me</span></div>
                    <img alt="Skills" className={s.item__image}
                         src={match?.params.routeKey === "skills" && active ? meActive : me}/>
                    {active ? "Skills" : ""}
                </NavLink>

                <NavLink
                    className={`${s.navBlock__item} ${match?.params.routeKey === "portfolio" ? s.navBlock__item_active : ""} ${active ? s.navBlock__item_activeB : ""}`}
                    to={PATH.PORTFOLIO}
                    onClick={() => setActive(false)}>
                    <div className={s.navBlock__item__text + " " + s.portfolio}>Portfolio</div>
                    <img alt="Portfolio" className={s.item__image}
                         src={match?.params.routeKey === "portfolio" && active ? portfolioActive : portfolio}/>
                    {active ? "Portfolio" : ""}
                </NavLink>

                <NavLink
                    className={`${s.navBlock__item} ${match?.params.routeKey === "contacts" ? s.navBlock__item_active : ''} ${active ? s.navBlock__item_activeB : ""}`}
                    to={PATH.CONTACTS}
                    onClick={() => setActive(false)}>
                    <div className={s.navBlock__item__text + " " + s.contacts}>Contacts</div>
                    <img alt="Contacts" className={s.item__image}
                         src={match?.params.routeKey === "contacts" && active ? contactsActive : contacts}/>
                    {active ? "Contacts" : ""} </NavLink>
            </div>
        </div>
    );
}

