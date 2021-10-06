import React from 'react';
import s from "./Home.module.css"
import sComm from "../common/style/Wrapper.module.css"

export const Home = () => {
    return (
        <div className={s.home}>
            <div className={`${sComm.wrapper} ${s.wrapper}`}>
                <div className={s.text}>
                    <h1>Hi! I'm Gorelova Polina.</h1>
                    <span className={s.span}>Frontend developer</span>
                </div>
                <div className={s.image}>
                </div>
            </div>
        </div>
    );
}

