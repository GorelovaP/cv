import React from 'react';
import s from "./ExtraInfoItem.module.scss"

type PropsType = {
    image: string,
    title: string,
    description: string
}
export const ExtraInfoItem = (props: PropsType) => {
    return (<div className={s.item}>
            <img src={props.image} alt="icon" className={s.image}/>
            <p className={s.text}><span className={s.title}>{props.title}</span>{props.description}</p>
        </div>
    );
}

