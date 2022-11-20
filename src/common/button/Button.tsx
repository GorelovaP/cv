import React from 'react';
import s from "./Button.module.scss"


type ButtonPropsType = {
    text: string;
    type?: "button" | "submit" | "reset"
    image?: string
}
export const Button = (props: ButtonPropsType) => {
    return (
        <div>
            <button type={props.type} className={s.button}>
                <span>{props.text}</span>
                <div className={s.button__icon}>
                    <img className={s.button__icon__image} src={props.image} alt={"buttonImage"}/>
                </div>
            </button>
        </div>
    )
}