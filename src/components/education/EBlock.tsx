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

                </div>
            </div>
        </div>
    )
}