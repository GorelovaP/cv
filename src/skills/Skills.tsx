import React from 'react';
import s from "./Skills.module.css"
import sComm from "../common/style/Wrapper.module.css"
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={s.skills}>
            <div className={`${sComm.wrapper} ${s.wrapper}`}>
                <h2>MY SKILLS</h2>
               <div className={s.skillsBox}>
                   <Skill/>
                   <Skill/>
                   <Skill/>
               </div>
            </div>
        </div>
    );
}

