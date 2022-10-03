export type ActionsAppType = ReturnType<typeof ModalStatusAC>
export const InitialState: StateType = {
    portfolios: {
        all: [
            {
                name: "TODO1",
                description: "description loren  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda cum dignissimos distinctio incidunt laborum modi nesciunt",
                image: "project.png",
                technology: "dfgfdsasdfddddddddddddddddddddddddddddddddddddddddddddddddddghgfds",
                link: "dfgxcvbnjmkljhgfdshj"
            },
            {
                name: "hjkl2",
                description: "description loren  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda cum dignissimos distinctio incidunt laborum modi nesciunt",
                image: "project.png",
                technology: "dfgfdsasdfddddddddddddddddddddddddddddddddddddddddddddddddddghgfds",
                link: "dfgxcvbnjmkljhgfdshj"
            },
            {
                name: "hjkl3",
                description: "description loren  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda cum dignissimos distinctio incidunt laborum modi nesciunt",
                image: "project.png",
                technology: "dfgfdsasdfddddddddddddddddddddddddddddddddddddddddddddddddddghgfds",
                link: "dfgxcvbnjmkljhgfdshj"
            },
            {
                name: "hjkl4",
                description: "description loren  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda cum dignissimos distinctio incidunt laborum modi nesciunt",
                image: "project.png",
                technology: "dfgfdsasdfddddddddddddddddddddddddddddddddddddddddddddddddddghgfds",
                link: "dfgxcvbnjmkljhgfdshj"
            }, {
                name: "hjkl5",
                description: "description loren  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda cum dignissimos distinctio incidunt laborum modi nesciunt",
                image: "project.png",
                technology: "dfgfdsasdfddddddddddddddddddddddddddddddddddddddddddddddddddghgfds",
                link: "dfgxcvbnjmkljhgfdshj"
            },
            {
                name: "hjkl6",
                description: "description loren  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda cum dignissimos distinctio incidunt laborum modi nesciunt",
                image: "project.png",
                technology: "dfgfdsasdfddddddddddddddddddddddddddddddddddddddddddddddddddghgfds",
                link: "dfgxcvbnjmkljhgfdshj"
            }],
        modalStatus: false
    },
    skills: {
        personalBlock: {
            infoItems: {
                FirstName: "Polina",
                LastName: "Gorelova",
                Age: "22",
                Nationality: "Belarusian",
                Freelance: "Available",
                Address: "Minsk",
                Phone: "+37529664768",
                Email: "Gorelic2000p@gmail.com",
                LinkedIn: "Gorelova Polina",
                Languages: "English, Russian"
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
    modalStatus: boolean
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
