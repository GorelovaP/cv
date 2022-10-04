import React from 'react';
import s from "./Skill.module.scss"

type SkillPropsType =
    {
        title: string;
        percent: string;
    }
export const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}> <span className={s.percent}>{props.percent}</span></div>
            <h3 className={s.title}>{props.title} </h3>
        </div>
    );
}

