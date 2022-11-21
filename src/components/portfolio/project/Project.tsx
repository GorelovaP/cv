import React from 'react';
import s from "./Project.module.scss"


type ProjectPropsType = {
    onClick: () => void;
    name: string;
    description: string;
    image: string
    technology: string;
    link: string;
}

export const Project = (props: ProjectPropsType) => {


    return (<>
            <div className={s.project} style={{
                backgroundImage: `url(${props.image})`
            }}
                 onClick={props.onClick}>
            </div>
        </>

    );
}

