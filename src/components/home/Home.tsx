import React from 'react';
import s from "./Home.module.css"


export const Home = () => {
    return (
        <div className={s.home}>
            <div className={s.home_color}>

            </div>
            {/*<div className={`${sComm.wrapper} ${s.wrapper}`}>*/}
            <div className={s.wrapper}>
                <div className={s.image}>
                </div>
                <div className={s.text}>
                    <h1 className={s.text__h1}>I'M GORELOVA POLINA.</h1>
                    <span className={s.span}>FRONTEND DEVELOPER</span>
                </div>
            </div>
        </div>
    );
}

