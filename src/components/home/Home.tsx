import React from 'react';
import s from "./Home.module.scss"
import {Button} from "../../common/button/Button";
import arrow from "./../../sources/images/ArroyRight.png"
import {NavLink} from "react-router-dom";
import {PATH} from "../../common/pages/Pages";


export const Home = () => {
    return (
        <div className={s.home}>
            <div className={s.home_color}>

            </div>
            <div className={s.wrapper}>
                <div className={s.image}> </div>
                <div className={s.text}>
                    <div className={s.text__headers}>
                        <h1 className={s.text__h1}>I'M GORELOVA POLINA.</h1>
                        <span className={s.span}>FRONTEND DEVELOPER</span>
                    </div>
                    <div className={s.text__description}>I'm a Tunisian based web designer & front‑end developer focused
                        on crafting clean &
                        user‑friendly experiences, I am passionate about building excellent software that improves the
                        lives of those around me.
                    </div>
                    <NavLink to={PATH.SKILLS}><Button text={"MORE ABOUT ME"} image={arrow}/></NavLink>
                </div>
            </div>
        </div>
    );
}

