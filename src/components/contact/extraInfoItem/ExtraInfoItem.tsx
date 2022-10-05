import React from 'react';
import s from "./ExtraInfoItem.module.scss"

type PropsType = {
    image: string,
    title: string,
    description: string
}
export const ExtraInfoItem = (props: PropsType) => {
    let mail = "mailto:mail@gorelic2000p@gmail.ru"
    let tel = "tel:+375296647668"
    return (<div className={s.item}>
            <img src={props.image} alt="icon" className={s.image}/>
            <a className={s.link} href={props.title === "Mail me" ? mail : tel}><p className={s.text}><span
                className={s.title}>{props.title}</span>{props.description}</p></a>
        </div>
    );
}

