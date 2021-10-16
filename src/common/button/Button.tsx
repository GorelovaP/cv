import React from 'react';
import s from "./Button.module.css"

type ButtunPropsType = {
    text: string;
}
export const Button = (props: ButtunPropsType) => {
    return (
        <div>
            <a href="#">
                <button className={s.button}>{props.text}
                <div className={s.buttonIcon}> </div>
            </button>
            </a>

        </div>
    )

}