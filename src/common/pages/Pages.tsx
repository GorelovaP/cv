import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import {Home} from "../../components/home/Home";
import {Skills} from "../../components/skills/Skills";
import {Portfolio} from "../../components/portfolio/Portfolio";
import {Contact} from "../../components/contact/Contact";
import {Error404Page} from "./Error404Page";


export const PATH = {
    HOME: '/home',
    SKILLS: '/skills',
    PORTFOLIO: '/portfolio',
    CONTACTS: '/contacts',
}


function Pages() {

    return (
        <div>
            <Routes>
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PATH.HOME*/}
                <Route path={'/'} element={<Navigate to={PATH.HOME}/>}/>

                <Route path={PATH.HOME} element={<Home/>}/>
                <Route path={PATH.SKILLS} element={<Skills/>}/>
                <Route path={PATH.PORTFOLIO} element={<Portfolio/>}/>
                <Route path={PATH.CONTACTS} element={<Contact/>}/>


                {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={'/*'} element={<Error404Page/>}/>
            </Routes>
        </div>
    )
}

export default Pages