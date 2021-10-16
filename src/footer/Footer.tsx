import React from 'react';
import s from "./Footer.module.css"
import sComm from "../common/style/Wrapper.module.css"
import {Block} from "./blok/Block";

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={`${sComm.wrapper} ${s.wrapper}`}>
                <h2>Gorelova Polina</h2>
                <div className={s.bloks}>
                    <Block/>
                    <Block/>
                    <Block/>
                    <Block/>
                </div>
                <p>2021 Все права защищены</p>

            </div>
        </div>
    );
}

