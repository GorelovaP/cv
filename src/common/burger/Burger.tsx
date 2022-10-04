import s from "./Burger.module.scss"

type BurgerPropsType = {
    className: string;
    onclick: (status: boolean) => void;
    active: boolean

}
export const Burger = (props: BurgerPropsType) => {
    const HandOpenOrClose = () => {
        props.onclick(!props.active)

    }
    return (
        <div className={`${s.burger} ${props.className}`} onClick={HandOpenOrClose}>
            <div className={s.span}> </div>
            <div className={s.span}> </div>
            <div className={s.span}> </div>
        </div>)
}