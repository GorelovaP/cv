import React from 'react';
import s from "./Button.module.css"


type ButtonPropsType = {
    text: string;
    type?: "button" | "submit" | "reset"
    image?: string
}
export const Button = (props: ButtonPropsType) => {
    return (
        <div>
            <a href="#">
                <button type={props.type} className={s.button}>{props.text}
                    <div className={s.buttonIcon}><img className={s.buttonIcon__image} src={props.image} alt="image"/></div>
                </button>
            </a>

        </div>
    )
}