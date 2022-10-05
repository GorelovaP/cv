import React from "react";
import {portfolioType} from "../../../redux/AppReduser";
import s from "./Modal.module.scss"
import link from "../../../sources/images/modal/link.png"
import description from "../../../sources/images/modal/description.png"


type propsType = {
    data: portfolioType
    close: () => void
}


export const ModalCard = (props: propsType) => {


    const CloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
        return e.target === e.currentTarget ? props.close() : ""
    }

    return (<div onClick={(e) => CloseModal(e)} className={s.modalBg}>
        <div className={s.close} onClick={props.close}> </div>
        <div className={s.modal}>
            <h3 className={s.modal__h3}>{props.data.name}</h3>
            <div className={s.modal__textBlock}>
                <div className={s.modal__textBlock__description}>
                    <img alt={"description"} src={description}/>
                    <span className={s.modal__textBlock__description_bold}>
                    Description:</span> {props.data.description}
                </div>
                <div className={s.modal__textBlock__link}>
                    <img alt={"link"} src={link}/>
                    <span className={s.modal__textBlock__link_bold}>Link:</span> <span
                    className={s.modal__textBlock__link_yellow}>
                    {props.data.link}
                </span>
                </div>
            </div>
            <img className={s.modal__image} src={props.data.image} alt={"ProjectImage"}/>
        </div>
    </div>)
}