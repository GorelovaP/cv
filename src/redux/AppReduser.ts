import cards from "../sources/images/projects/cards.png"
import invest from "../sources/images/projects/invest.png"
import skychat from "../sources/images/projects/skychat.png"
import portfolio from "../sources/images/projects/portfolio.png"
import counter from "../sources/images/projects/counter.png"
import todolist from "../sources/images/projects/todo.png"
import react from "../sources/images/skills/react.png"
import redux from "../sources/images/skills/redux.png"
import js from "../sources/images/skills/javascript.svg"
import ts from "../sources/images/skills/typescript.svg"
import html from "../sources/images/skills/html-5.svg"
import css from "../sources/images/skills/css3.svg"
import scss from "../sources/images/skills/sass.svg"
import code from "../sources/images/skills/coding.png"
import api from "../sources/images/skills/api.png"
import postman from "../sources/images/skills/postman.png"
import storybook from "../sources/images/skills/letter-s.png"
import test from "../sources/images/skills/tests.png"
import git from "../sources/images/skills/git.png"
import figma from "../sources/images/skills/figma.png"
import sql from "../sources/images/skills/sql-server.png"
import jquery from "../sources/images/skills/jquery.svg"
import {AppThunkType} from "./store";
import {appAPI, dataMessageType} from "../api/appApi";


export type ActionsAppType =
    ReturnType<typeof ModalStatusAC>
    | ReturnType<typeof SetModalInformationAC>
    | ReturnType<typeof SetIsSendMessageAC>
    | ReturnType<typeof SetLoadingAC>
    | ReturnType<typeof SetAppErrorAC>

export const InitialState: StateType = {
    portfolios: {
        all: [
            {
                name: "Cards",
                description: `This application is a learning cards application which allows users to create their own packs with cards or use others packs previously created by another users. While creating a new pack of cards you will be providing the question and the answer on it for every card. After that you just need to start learning process and every time you answer the question evaluate it according to the grades inside how good do you know the answer. Application has a special randomizer that analyze your grades to the question and will show you more often those of the questions that you mentioned as most difficult.`,
                image: cards,
                technology: "React, Redux, TypeScript, Formik, Yup, Material UI, Styled Components",
                link: "https://cards-alpha-jade.vercel.app/",
                git: "https://github.com/GorelovaP/Cards"
            },
            {
                name: "TODO List",
                description: "Todoist is a popular task manager and to–do list application. In this application you can create and delete todo-lists, change their name, create, delete, modify and sort tasks in them. Registration is also implemented in the project.",
                image: todolist,
                technology: "React, Redux, TypeScript, Formik, Yup, Material UI, module CSS",
                link: "https://gorelovap.github.io/ToDo",
                git: "https://github.com/GorelovaP/ToDo"
            },
            {
                name: "Social Network SKYCHAT",
                description: "description loren  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda cum dignissimos distinctio incidunt laborum modi nesciunt This application is a social network for developers. This educational project has been implemented by using modern and outdated technologies (for example, class components). This approach has been chosen to gain a deeper understanding, how component lifecycle methods work, and their differences with the use of hooks in functional components. This knowledge will help in rewriting old projects.",
                image: skychat,
                technology: "React, Redux, Hooks, Class and Functional components, TypeScript, Formik, REST API, Redux-contactForm, Module css",
                link: "https://gorelovap.github.io/SocialNetworkTS",
                git: "https://github.com/GorelovaP/SocialNetworkTS"
            },
            {
                name: "Portfolio",
                description: "Portfolio website is a collection of my completed works, projects and other documents that demonstrate my professionalism and experience. Here you can download my cv, get acquainted with the projects in detail and find my contacts. The site is fully adaptive for mobile and desktop devices. A  NodeJS server was implemented for sending messages using a minimalistic and flexible Express web framework.",
                image: portfolio,
                technology: "React, Redux, TypeScript, SCSS, Formik, Yup, React-awesome-reveal, React-tsparticles, React-parallax-tilt, NodeJS + Express",
                link: "https://gorelovap.github.io/cv",
                git: "https://github.com/GorelovaP/cv"
            },
            {
                name: "Business card website RVM-INVEST",
                description: "This application is a business card website for the commercial organization, that was created by my own design. On the website, a user can get acquainted with the history of the company, learn about products and production technologies. He can also find the supplier's contacts or leave his own in the feedback contactForm. The site saves information from the feedback contactForm in a Google sheet for further analysis by the company manager (it was the customer's wish)",
                image: invest,
                technology: "React,TypeScript, Module CSS, React-hook-contactForm, Yup, React-player",
                link: "https://gorelovap.github.io/RVM_Invest/",
                git: "https://github.com/GorelovaP/RVM_Invest"
            },
            {
                name: "Counter",
                description: "Counter app is a universal tool for counting anything you want. You can also set restrictions that will be saved in LocalStorage. In the application, you can't count in a negative value.",
                image: counter,
                technology: "React, Redux, TypeScript, Module CSS",
                link: "https://gorelovap.github.io/Counter",
                git: "https://github.com/GorelovaP/Counter"
            }],
        modalStatus: false,
        modal: {
            name: "",
            description: "",
            image: "",
            technology: "",
            link: ""
        }
    },
    skills: {
        personalBlock: {
            infoItems: {
                FirstName: "Polina",
                LastName: "Gorelova",
                Age: "22",
                Nationality: "Belarusian",
                Address: "Minsk",
                Freelance: "Available",
                Relocate: "Available",
                Phone: "+375 29 664768",
                English: "B1 - in process",
                Russian: "Native",
            },
            facts: [
                ["COMPLETED PROJECTS", "6"],
                ["UNIVERSITY DEGREE IN PROGRAMMING ", ":)"],
            ]
        },
        skillsBlock: [
            {name: "React", image: react},
            {name: "Redux", image: redux},
            {name: "JS", image: js},
            {name: "TS", image: ts},
            {name: "HTML5", image: html},
            {name: "CSS", image: css},
            {name: "SCSS", image: scss},
            {name: "Styled components", image: code},
            {name: "REST API", image: api},
            {name: "Postman", image: postman},
            {name: "Storybook", image: storybook},
            {name: "Unit tests", image: test},
            {name: "GIT", image: git},
            {name: "Figma", image: figma},
            {name: "SQL", image: sql},
            {name: "JQuery", image: jquery}
        ],
        experienceAndEducationBlock: {
            experience: [{
                years: "Oct. 2022 - Nov. 2022",
                title: "Internship in IT-Incubator",
                addition: "Front-end developer",
                description: `Teamwork on the project "Cards". SPA application development, bug fixing, working with server, refactoring, deploying.`
            }],
            education: [{
                years: "2022",
                title: "IT-INCUBATOR",
                addition: "Front-end developer",
                description: "(React, Redux, Typescript, JavaScript, Storybook etc..)"
            }, {
                years: "2018 - 2022",
                title: "BSUIR",
                addition: "Bachelor of economist-programmer",
                description: "* BSUIR - Belarusian State University of                                            Informatics and Radioelectronics"
            },
            ]
        }
    },
    contact: {
        isSendForm: false
    },
    loading: false,
    appError:""
}


export const AppReducer = (state: StateType = InitialState, action: ActionsAppType): StateType => {
    switch (action.type) {
        case 'PORTFOLIO/CHANGE-MODAL-STATUS':
            return {...state, portfolios: {...state.portfolios, modalStatus: action.status}}
        case 'PORTFOLIO/SET-MODAL-INFO':
            return {...state, portfolios: {...state.portfolios, modal: {...action.information}}}
        case 'CONTACT/SET-ISSEND-MESSAGE':
            return {...state, contact: {...state.contact, isSendForm: action.isSend}}
        case 'APP/SET-LOADING':
            return {...state, loading: action.isLoading}
        case 'APP/SET-ERROR':
            return {...state, appError: action.error}
        default:
            return state
    }
}


export const ModalStatusAC = (status: boolean) => {
    return {type: "PORTFOLIO/CHANGE-MODAL-STATUS", status} as const
}
export const SetModalInformationAC = (information: portfolioType) => {
    return {type: "PORTFOLIO/SET-MODAL-INFO", information} as const
}
export const SetIsSendMessageAC = (isSend: boolean) => {
    return {type: "CONTACT/SET-ISSEND-MESSAGE", isSend} as const
}
export const SetLoadingAC = (isLoading: boolean) => {
    return {type: "APP/SET-LOADING", isLoading} as const
}
export const SetAppErrorAC = (error: string) => {
    return {type: "APP/SET-ERROR", error} as const
}


export const sendMessageTC = (date: dataMessageType): AppThunkType => async dispatch => {
    try {
        dispatch(SetLoadingAC(true))
        const res = await appAPI.sendMessage(date)
        dispatch(SetIsSendMessageAC(true))
    } catch (err) {
        debugger
        dispatch(SetAppErrorAC("something went wrong"))
    } finally {
        dispatch(SetLoadingAC(false))
    }
}


type StateType = {
    portfolios: portfoliosBlockType;
    skills: skillsBlockType;
    contact: contactBlockType;
    loading: boolean,
    appError:string,
}
type skillsBlockType = {
    personalBlock: personalBlockType;
    skillsBlock: skillsItemType[]
    experienceAndEducationBlock: experienceAndEducationBlockType
}
type portfoliosBlockType = {
    all: portfolioType[],
    modalStatus: boolean,
    modal: portfolioType
}
type contactBlockType = {
    isSendForm: boolean
}

type personalBlockType = {
    infoItems: infoItemsType;
    facts: factsType[];
}
type experienceAndEducationBlockType = {
    experience: exAndEdTYpe[];
    education: exAndEdTYpe[];
}

export type exAndEdTYpe = {
    years: string,
    title: string,
    addition: string,
    description: string,

}
export type skillsItemType = {
    name: string;
    image: string
}

export type portfolioType = {
    name: string,
    description: string;
    image: string
    technology: string
    link: string,
    git?: string,
}

export type infoItemsType = {
    FirstName: string,
    LastName: string,
    Age: string,
    Nationality: string,
    Freelance: string,
    Relocate: string,
    Address: string,
    Phone: string,
    English: string
    Russian: string,
}

export type factsType = string[]


