import React from "react";
import s from "./ModalWrapper.module.scss";

type ModalWrapperType = {
    children: React.ReactNode
    close: () => void
}
export const ModalWrapper = (props: ModalWrapperType) => {
    const CloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
        return e.target === e.currentTarget ? props.close() : ""
    }

    return (<div onClick={(e) => CloseModal(e)} className={s.modalBg}>
        <div className={s.close} onClick={props.close}></div>
        <div className={s.modal}>
            {props.children}
        </div>
    </div>)
}