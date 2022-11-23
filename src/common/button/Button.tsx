import React from 'react';
import s from "./Button.module.scss"
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";


type ButtonPropsType = {
    text: string;
    type?: "button" | "submit" | "reset"
    image?: string
    onClick?: () => void
}
export const Button = (props: ButtonPropsType) => {
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.loading)
    return (
        <div>
            <button type={props.type} className={s.button} onClick={props.onClick} disabled={isLoading}>
                <span>{props.text}</span>
                <div className={s.button__icon}>
                    <img className={s.button__icon__image} src={props.image} alt={"buttonImage"}/>
                </div>
            </button>
        </div>
    )
}