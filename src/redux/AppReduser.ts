import project from "../sources/images/project.png"

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
                Freelance: "Available",
                Relocate: "Available - Poland",
                Address: "Minsk",
                Phone: "+37529664768",
                Email: "Gorelic2000p@gmail.com",
                LinkedIn: "Gorelova Polina",
                Languages: "English - B1, Russian"
            },
            facts: [
                ["YEARS OF EXPERIENCE", "21"],
                ["COMPLETED PROJECTS", "12"],
                ["HAPPY CUSTOMERS", "1"],
                ["zzxzxzxzx", "23"]
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
    Email: string,
    LinkedIn: string,
    Languages: string
}

export type factsType = string[]


export const ModalStatusAC = (status: boolean) => {
    return {type: "PORTFOLIO/CHANGE-MODAL-STATUS", status} as const

}
export const SetModalInformationAC = (information: portfolioType) => {
    return {type: "PORTFOLIO/SET-MODAL-INFO", information} as const
}
