import React from 'react';
import s from "./Project.module.css"
import {Button} from "../../../common/button/Button";

type ProjectPropsType={
    name: string;
    description: string;
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={s.project}>
            <div className={s.image}>
                <Button text={"посмотреть"}/>
            </div>
            <h3 className={s.name}>{props.name}</h3>
            <span className={s.description}>{props.description} </span>
        </div>
    );
}

