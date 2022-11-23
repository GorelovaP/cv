import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from "./Button.module.scss"
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type SuperButtonPropsType = DefaultButtonPropsType & ButtonPropsType

type ButtonPropsType = {
    text: string;
    type?: "button" | "submit" | "reset"
    image?: string
}
export const Button: React.FC<SuperButtonPropsType> = ({
                                                           text,
                                                           type,
                                                           image,
                                                           ...restProps

                                                       }) => {
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.loading)
    return (
        <div className={s.buttonArea}>
            <button type={type} className={s.button} disabled={isLoading} {...restProps}>
                <span>{text}</span>
                <div className={s.button__icon}>
                    <img className={s.button__icon__image} src={image} alt={"buttonImage"}/>
                </div>
            </button>
        </div>
    )
}