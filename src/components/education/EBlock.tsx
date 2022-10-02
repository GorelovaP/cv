import s from "./Eblock.module.scss"

type propsType = {
    image: string,
    years: string,
    title: string,
    addition: string,
    description: string
}

export const EBlock = (props: propsType) => {
    return (
        <div className={s.blockContainer}>
            <div className={s.imageBlock}>
                <div className={s.image}>
                    <img src={props.image} alt={"icon"}/>
                </div>
            </div>
            <div className={s.informationBlock}>
                <div className={s.years}>
                    <span>{props.years}</span>
                </div>
                <h5 className={s.h5}>{props.title}<span>{props.addition}</span></h5>
                <div className={s.description}>
                    {props.description}
                </div>
            </div>
        </div>
    )
}