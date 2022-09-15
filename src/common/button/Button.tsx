import React from 'react';
import s from "./Button.module.css"

type ButtunPropsType = {
    text: string;
    type?: "button" | "submit" | "reset"
}
export const Button = (props: ButtunPropsType) => {
    return (
        <div>
            <a href="#">
                <button type={props.type} className={s.button}>{props.text}
                    <div className={s.buttonIcon}>img</div>
                </button>
            </a>

        </div>
    )

}