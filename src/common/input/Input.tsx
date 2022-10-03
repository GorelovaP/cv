import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';
import s from "./Input.module.scss"


type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>


export const Input = (props: DefaultInputPropsType) => {
    return (<>
            <input type={props.type} className={`${s.input} ${props.className} `} placeholder={props.placeholder}/>

        </>
    );
}

