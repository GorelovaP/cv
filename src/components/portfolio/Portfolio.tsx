import React from 'react';
import s from "./Portfolio.module.scss"

import {Project} from "./project/Project";
import {Title} from "../../common/title/Title";
import project from "../../sources/images/project.png"
import {useDispatch, useSelector} from "react-redux";
import {ModalStatusAC, portfolioType} from "../../redux/AppReduser";
import {AppRootStateType} from "../../redux/store";


export const Portfolio = () => {
    let dispatch = useDispatch()
    let active = useSelector<AppRootStateType, boolean>(state => state.app.portfolios.modalStatus)
    let portfolios = useSelector<AppRootStateType, portfolioType[]>(state => state.app.portfolios.all)

    const OpenOnClickHandler = () => {
        dispatch(ModalStatusAC(true))
    }
    const CloseOnClickHandler = () => {
        dispatch(ModalStatusAC(true))
    }

    return (
        <div className={s.portfolio}>
            <Title bgTitle={"works"} mainTitle={"My "} spanText={"portfolio"}/>
            <div className={s.bodyWrapper}>
                {portfolios.map((el, index) =>
                    <Project onClick={OpenOnClickHandler}
                             key={index}
                             name={el.name} description={el.description}
                             image={project} technology={el.technology} link={el.link}/>
                )}
            </div>
        </div>
    );
}

