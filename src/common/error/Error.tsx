import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {SetAppErrorAC} from "../../redux/AppReduser";
import s from "./Error.module.scss"
import {AppRootStateType} from "../../redux/store";

export const Error = () => {
    const appError = useSelector<AppRootStateType, string>(state => state.app.appError)
    const dispatch = useDispatch()

    useEffect(() => {
        let showError = setTimeout(() => {
            dispatch(SetAppErrorAC(''))
        }, 7000)

        return () => clearTimeout(showError)
    }, [])

    return (<div className={s.errorArea}>
        {appError}
    </div>)
}
