import React from "react";
import s from "./contactModal.module.scss"
import {ModalWrapper} from "../../../common/modal/ModalWrapper";


type propsType = {
    close: () => void
}


export const ContactModal = (props: propsType) => {

    return (<ModalWrapper close={props.close}>
            <h3 className={s.modal__h3}>The message has been sent!</h3>
            <div className={s.modal__text}>
                <div className={s.modal__text__bock}>Thank you for your initiative.</div>
                <div className={s.modal__text__bock}> I will contact you in the nearest free time.</div>
            </div>

        </ModalWrapper>
    )
}