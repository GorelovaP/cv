import React from 'react';
import s from "./Portfolio.module.scss"

import {Project} from "./project/Project";
import {Title} from "../../common/title/Title";
import {useDispatch, useSelector} from "react-redux";
import {ModalStatusAC, portfolioType, SetModalInformationAC} from "../../redux/AppReduser";
import {AppRootStateType} from "../../redux/store";
import {ModalCard} from "./modal/ModalCard";
import {Slide} from 'react-awesome-reveal';


export const Portfolio = () => {
    let dispatch = useDispatch()
    let active = useSelector<AppRootStateType, boolean>(state => state.app.portfolios.modalStatus)
    let portfolios = useSelector<AppRootStateType, portfolioType[]>(state => state.app.portfolios.all)
    let modal = useSelector<AppRootStateType, portfolioType>(state => state.app.portfolios.modal)

    const OpenOnClickHandler = (portfolio: portfolioType) => {
        dispatch(ModalStatusAC(true))
        dispatch(SetModalInformationAC(portfolio))
    }
    const CloseOnClickHandler = () => {
        dispatch(ModalStatusAC(false))
    }

    return (<>
            {active && <ModalCard data={modal} close={CloseOnClickHandler}/>}
            <div className={s.supportBg}>
                <Slide className={s.animation} direction="down">
                    <div className={s.portfolio}>
                        <Title bgTitle={"works"} mainTitle={"My"} spanText={"portfolio"}/>
                        <div className={s.bodyWrapper}>
                            {portfolios.map((el, index) =>
                                <Project onClick={() => OpenOnClickHandler(el)}
                                         key={index}
                                         name={el.name} description={el.description}
                                         image={el.image} technology={el.technology} link={el.link}/>
                            )}
                        </div>
                    </div>
                </Slide>
            </div>
        </>
    );
}

