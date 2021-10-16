import React from 'react';
import s from "./Contact.module.css"
import sComm from "../common/style/Wrapper.module.css"
import {Button} from "../common/button/Button";

export const Contact = () => {
    return (
        <div className={s.contact}>
            <div className={`${sComm.wrapper} ${s.wrapper}`}>
                <h2 className={s.h2}>Contacts</h2>
                <form action="#" className={s.form}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="fild"  className={s.textarea}> </textarea>
                </form>
                <Button text={"Отправить"}/>
            </div>
        </div>
    );
}

