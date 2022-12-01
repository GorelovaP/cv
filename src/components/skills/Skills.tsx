import React from 'react';
import s from "./Skills.module.scss"
import download from "../../sources/images/download.png"
import educationIcon from "../../sources/images/educationIcon.png"
import workIcon from "../../sources/images/workIcon.png"


import {Skill} from "./skill/Skill";
import {Title} from "../../common/title/Title";
import {Button} from "../../common/button/Button";
import {EBlock} from "../education/EBlock";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {exAndEdTYpe, factsType, infoItemsType, skillsItemType} from "../../redux/AppReduser";
import Tilt from "react-parallax-tilt";
import {Slide, Fade} from 'react-awesome-reveal';
import {SocialItem} from "../contact/sotialItem/Socialltem";
import linked from "../../sources/images/socialNetworks/linkedin.png";
import git from "../../sources/images/socialNetworks/github.png";
import codewars from "../../sources/images/socialNetworks/codewars.svg";


export const Skills = () => {
    let infoItems = useSelector<AppRootStateType, infoItemsType>(state => state.app.skills.personalBlock.infoItems)
    let facts = useSelector<AppRootStateType, factsType[]>(state => state.app.skills.personalBlock.facts)
    let skillsItems = useSelector<AppRootStateType, skillsItemType[]>(state => state.app.skills.skillsBlock)
    let experienceItems = useSelector<AppRootStateType, exAndEdTYpe[]>(state => state.app.skills.experienceAndEducationBlock.experience)
    let educationItems = useSelector<AppRootStateType, exAndEdTYpe[]>(state => state.app.skills.experienceAndEducationBlock.education)

    return (<div className={s.supportBg}>
            <Slide direction="down">
                <div className={s.skills}>
                    <Title bgTitle={"Resume"} mainTitle={"About "} spanText={"me"}/>
                    <div className={s.bodyWrapper}>
                        <Fade>
                            <div className={s.PersonalBlock}>
                                <div className={s.PersonalBlock__info}>
                                    <h3 className={s.PersonalBlock__info__h3}> Personal info</h3>
                                    <div className={s.image}> </div>
                                    <ul className={s.PersonalBlock__info__items}>
                                        {
                                            Object.entries(infoItems).map(([key, value]) => <li key={key}
                                                                                                className={s.PersonalBlock__info__items__item}>
                                                <span className={s.item__key}>{key} : </span>
                                                <span className={s.item__value}>{value}</span></li>)
                                        }
                                    </ul>
                                    <div className={s.SocialContainer}>
                                        <a href="https://www.linkedin.com/in/polin%D0%B0-gorelova">
                                            <SocialItem image={linked}/></a>
                                        <a href="https://github.com/GorelovaP"> <SocialItem image={git}/></a>
                                        <a href="https://www.codewars.com/users/GorelovaP"> <SocialItem
                                            image={codewars}/></a>
                                    </div>
                                    <a href={"https://drive.google.com/file/d/1OikKhb5lNAMsUiqGzioGj5HWD5fcy18M/view?usp=sharing"}
                                       download>
                                        <Button text={"Download CV"} image={download}/>
                                    </a>
                                </div>
                                <div className={s.PersonalBlock__facts}>
                                    {facts.map((el, index) => {
                                        return <Tilt key={index}>
                                            <div key={index} className={`${s.PersonalBlock__facts__box} ${facts[0] === el ? s.plus : ""} ` }>
                                                <h3 className={s.box_h3}>{el[1]}</h3>
                                                <p className={s.box_p}>
                                                    {el[0]}
                                                </p>
                                            </div>
                                        </Tilt>
                                    })}

                                </div>
                            </div>
                        </Fade>
                        <hr className={s.separator}/>

                        <h3 className={s.commonH3}>My skills</h3>
                        <Fade>
                            <div className={s.Box}>
                                {skillsItems.map(s => <Skill title={s.name}
                                                             image={s.image}/>)}
                            </div>
                        </Fade>
                        <hr className={s.separator}/>
                        <h3 className={s.commonH3}> experience & education </h3>
                        <div className={s.experienceAndEducationBlock}>

                            <div className={s.experienceContainer}>
                                {experienceItems.map(i => <EBlock image={workIcon}
                                                                  years={i.years}
                                                                  title={i.title}
                                                                  addition={i.addition}
                                                                  description={i.description}/>)}

                            </div>

                            <div className={s.educationContainer}>
                                <Fade>
                                    {educationItems.map(i => <EBlock image={educationIcon}
                                                                     years={i.years}
                                                                     title={i.title}
                                                                     addition={i.addition}
                                                                     description={i.description}/>)}
                                </Fade>
                            </div>

                        </div>
                    </div>

                </div>
            </Slide>
        </div>

    )
        ;
}

