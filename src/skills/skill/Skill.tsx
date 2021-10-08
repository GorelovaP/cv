import React from 'react';
import s from "./Skill.module.css"

type SkillPropsType=
    {
        title: string;
    text: string;
}
export const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.skill}>
            <div  className={s.icon}> </div>
            <h3 className={s.title}>{props.title} </h3>
            <div className={s.image}> </div>
            <span className={s.text}>{props.text}</span>
        </div>
    );
}

