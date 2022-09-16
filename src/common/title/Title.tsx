import s from "./Title.module.css"

type TitlePropsType = {
    mainTitle: string;
    bgTitle: string;
    spanText: string;
}
export const Title = (props: TitlePropsType) => {
    return (<div className={s.titleSpace}>
        <div className={s.titleSpace__bgTitle}>
            {props.bgTitle}
        </div>
        <div>
            <h1 className={s.titleSpace__mainTitle}>{props.mainTitle}
                <span className={s.titleSpace__mainTitle__span}>{props.spanText}</span></h1>
        </div>
    </div>)
}