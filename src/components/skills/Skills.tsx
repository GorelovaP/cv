import React from 'react';
import s from "./Skills.module.css"
import sComm from "../../common/style/Wrapper.module.css"

import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={s.skills}>
            <div className={`${sComm.wrapper} ${s.wrapper}`}>
                <h2>MY SKILLS</h2>
                <div className={sComm.Box}>
                    <Skill title={"JS"}
                           text={"Lorem ipsum dolor sit amet,ex excepturi fugit in, repellendus reprehenderit rerum voluptate voluptates voluptatum."}/>
                    <Skill title={"CCS"} text={ "consectetur adipisicing elit. Accusamus accusantium corporis doloribus "}/>
                    <Skill title={"HTML"} text={"iste laborum nemo nobis non perspiciatis quisquam quos"}/>
                </div>
            </div>
        </div>
    );
}

