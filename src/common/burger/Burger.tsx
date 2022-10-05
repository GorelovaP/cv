import s from "./Burger.module.scss"
import {useMatch} from "react-router-dom";

type BurgerPropsType = {
    className: string;
    onclick: (status: boolean) => void;
    active: boolean

}
export const Burger = (props: BurgerPropsType) => {
    const match = useMatch('/:routeKey');


    const HandOpenOrClose = () => {
        props.onclick(!props.active)

    }
    return (
        <div className={`${s.burger} ${props.className} ${match?.params.routeKey === "home" ? s.burger_home : ""}`}
             onClick={HandOpenOrClose}>
            <div className={s.span}> </div>
            <div className={s.span}> </div>
            <div className={s.span}> </div>
        </div>)
}