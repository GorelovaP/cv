import s from "./Title.module.scss"

type TitlePropsType = {
    mainTitle: string;
    bgTitle: string;
    spanText: string;
    extraClass?: string;
}
export const Title = (props: TitlePropsType) => {
    return (
        <div className={s.titleSpace}>
            <div className={`${s.titleSpace__bgTitle} ${props.extraClass}`}>
                {props.bgTitle}
            </div>
            <div>
                <h1 className={s.titleSpace__mainTitle}>{props.mainTitle}
                    <span className={s.titleSpace__mainTitle__span}>{props.spanText}</span></h1>
            </div>
        </div>)
}