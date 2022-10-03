import React, {DetailedHTMLProps, TextareaHTMLAttributes} from 'react';
import common from "../input/Input.module.scss"


type DefaultInputPropsType = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>


export const TextArea = (props: DefaultInputPropsType) => {
    return (<>
            <textarea className={`${common.input} ${props.className} `} placeholder={props.placeholder}/>

        </>
    );
}

