import React from 'react';
import s from "./Portfolio.module.css"
import sComm from "../../common/style/Wrapper.module.css"
import {Project} from "./project/Project";
import {Title} from "../../common/title/Title";


export const Portfolio = () => {
    return (
        <div className={s.portfolio}>
            <Title bgTitle={"works"} mainTitle={"My "} spanText={"portfolio"}/>
            <div className={`${sComm.wrapper} ${s.wrapper}`}>
                <h2 className={s.h2}>Portfolio</h2>
                <div className={sComm.Box}>

                    <Project name={"Block 1"}
                             description={" description loren  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda cum dignissimos distinctio incidunt laborum modi nesciunt,"}/>
                    <Project name={"Block 2"}
                             description={"description quasi reiciendis temporibus unde veritatis voluptates? Ab cumque delectus officia, porro quod voluptatum."}/>
                </div>
            </div>
        </div>
    );
}

