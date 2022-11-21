import React from 'react';
import {Fade} from 'react-awesome-reveal';
import s from "./Skill.module.scss"

type SkillPropsType =
    {
        title: string;
        image: string;
    }
export const Skill = (props: SkillPropsType) => {
    return (

        <div className={s.skill}>
            <Fade>
                <div className={s.icon}><img className={s.icon__image} src={props.image} alt={"skill"}/></div>
                <h3 className={s.title}>{props.title} </h3>
            </Fade>
        </div>
    );
}

