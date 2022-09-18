import React from 'react';
import s from "./Contact.module.scss"
import {Button} from "../../common/button/Button";
import {Title} from "../../common/title/Title";

export const Contact = () => {
    return (
        <div className={s.contact}>
            <Title bgTitle={"contact"} mainTitle={"Get in "} spanText={"touch"}/>
            <div className={s.bodyWrapper}>
                <div className={s.content}>
                    <div className={s.blockInfo}>
                        <h3 className={s.titleH3}>Don't be shy !</h3>
                    </div>
                    <div className={s.blockForm}>
                        <form action="#" className={s.form}>
                            <input type="text"/>
                            <input type="text"/>
                            <textarea name="fild" className={s.textarea}> </textarea>
                        </form>
                        <Button type={"submit"} text={"Отправить"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

