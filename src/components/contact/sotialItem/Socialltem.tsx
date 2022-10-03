import React from 'react';
import s from "./SocialItem.module.scss"

type PropsType = {
    image: string
}
export const SocialItem = (props: PropsType) => {
    return (<div className={s.item}>
            <img src={props.image} alt="icon" className={s.image}/>
        </div>
    );
}

