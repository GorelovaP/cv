import project from "../sources/images/project.png"
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

export type ActionsAppType = ReturnType<typeof ModalStatusAC> | ReturnType<typeof SetModalInformationAC>
export const InitialState: StateType = {
    portfolios: {
        all: [
            {
                name: "TODO1",
                description: "description loren  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda cum dignissimos distinctio incidunt laborum modi nesciunt",
                image: project,
                technology: "dfgfdsasdfddddddddddddddddddddddddddddddddddddddddddddddddddghgfds",
                link: "dfgxcvbnjmkljhgfdshj"
            },
            {
                name: "hjkl222",
                description: "description loren  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda cum dignissimos distinctio incidunt laborum modi nesciunt",
                image: project,
                technology: "dfgfdsasdfddddddddddddddddddddddddddddddddddddddddddddddddddghgfds",
                link: "dfgxcvbnjmkljhgfdshj"
            },
            {
                name: "hjkl333",
                description: "description loren  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda cum dignissimos distinctio incidunt laborum modi nesciunt",
                image: project,
                technology: "dfgfdsasdfddddddddddddddddddddddddddddddddddddddddddddddddddghgfds",
                link: "dfgxcvbnjmkljhgfdshj"
            },
            {
                name: "hjkl444",
                description: "description loren  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda cum dignissimos distinctio incidunt laborum modi nesciunt",
                image: project,
                technology: "dfgfdsasdfddddddddddddddddddddddddddddddddddddddddddddddddddghgfds",
                link: "dfgxcvbnjmkljhgfdshj"
            }, {
                name: "hjkl555",
                description: "description loren  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda cum dignissimos distinctio incidunt laborum modi nesciunt",
                image: project,
                technology: "dfgfdsasdfddddddddddddddddddddddddddddddddddddddddddddddddddghgfds",
                link: "dfgxcvbnjmkljhgfdshj"
            },
            {
                name: "hjkl666",
                description: "description loren  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda cum dignissimos distinctio incidunt laborum modi nesciunt",
                image: project,
                technology: "dfgfdsasdfddddddddddddddddddddddddddddddddddddddddddddddddddghgfds",
                link: "dfgxcvbnjmkljhgfdshj"
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
                ["YEARS OF EXPERIENCE", "21"],
                ["COMPLETED PROJECTS", "6"],
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
                years: "Oct. 2022 - November",
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
    }
}


export const AppReducer = (state: StateType = InitialState, action: ActionsAppType): StateType => {
    switch (action.type) {
        case 'PORTFOLIO/CHANGE-MODAL-STATUS':
            return {...state, portfolios: {...state.portfolios, modalStatus: action.status}}
        case 'PORTFOLIO/SET-MODAL-INFO':
            return {...state, portfolios: {...state.portfolios, modal: {...action.information}}}
        default:
            return state
    }
}


type StateType = {
    portfolios: portfoliosBlockType;
    skills: skillsBlockType;
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


export const ModalStatusAC = (status: boolean) => {
    return {type: "PORTFOLIO/CHANGE-MODAL-STATUS", status} as const

}
export const SetModalInformationAC = (information: portfolioType) => {
    return {type: "PORTFOLIO/SET-MODAL-INFO", information} as const
}
