type StoreType={
    skills: skillsBlockType;
}
type skillsBlockType={
    personalBlock: personalBlockType;
}
type personalBlockType={
    infoItems: infoItemsType;
    facts: factsType[];
}
type infoItemsType={
    FirstName: string,
    LastName: string,
    Age:string ,
    Nationality: string,
    Freelance:string ,
    Address:string ,
    Phone: string,
    Email: string,
    LinkedIn: string,
    Languages: string
}
type factsType = string[]
export const Store: StoreType = {
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