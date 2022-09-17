import React from 'react';
import s from "./Skills.module.css"
import sComm from "../../common/style/Wrapper.module.css"
import download from "../../sources/images/download.png"

import {Skill} from "./skill/Skill";
import {Title} from "../../common/title/Title";
import {Store} from "../../redux/store";
import {Button} from "../../common/button/Button";

export const Skills = () => {
    let infoItems = Store.skills.personalBlock.infoItems
    let facts = Store.skills.personalBlock.facts
    return (
        <div className={s.skills}>
            <Title bgTitle={"Resume"} mainTitle={"About "} spanText={"me"}/>
            <div className={sComm.bodyWrapper}>
                <div className={s.PersonalBlock}>
                    <div className={s.PersonalBlock__info}>
                        <h3 className={s.PersonalBlock__info__h3}> Personal info</h3>
                        <ul className={s.PersonalBlock__info__items}>
                            {
                                Object.entries(infoItems).map(([key, value]) => <li key={key}
                                                                                    className={s.PersonalBlock__info__items__item}>
                                    <span className={s.item__key}>{key} :</span> <span
                                    className={s.item__value}>{value}</span></li>)
                            }
                        </ul>
                        <Button text={"Download CV"} image={download}/>
                    </div>
                    <div className={s.PersonalBlock__facts}>
                        {facts.map((el, index) => {
                            return <div key={index} className={s.PersonalBlock__facts__box}>
                                <h3 className={s.box_h3}>{el[1]}</h3>
                                <p className={s.box_p}>
                                    {el[0]}
                                </p>
                            </div>
                        })}
                    </div>
                </div>
                <hr className={s.separator}/>

                <h3 className={s.commonH3}>My skills</h3>
                <div className={sComm.Box}>
                    <Skill title={"JS"}
                           percent={"75%"}/>
                    <Skill title={"JS"}
                           percent={"75%"}/>
                    <Skill title={"JS"}
                           percent={"75%"}/>
                    <Skill title={"JS"}
                           percent={"75%"}/>
                    <Skill title={"JS"}
                           percent={"75%"}/>
                    <Skill title={"JS"}
                           percent={"75%"}/>
                    <Skill title={"JS"}
                           percent={"75%"}/>
                    <Skill title={"JS"}
                           percent={"75%"}/>

                </div>
                <hr className={s.separator}/>
                <h3 className={s.commonH3}>Education</h3>
            </div>
        </div>
    );
}

