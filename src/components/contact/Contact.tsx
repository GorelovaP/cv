import React from 'react';
import s from "./Contact.module.scss"
import {Title} from "../../common/title/Title";
import {ExtraInfoItem} from "./extraInfoItem/ExtraInfoItem";
import PhoneMe from "../../sources/images/PhoneMe.png"
import MailMe from "../../sources/images/MailMe.png"
import telegram from "../../sources/images/socialNetworks/telegram.png"
import git from "../../sources/images/socialNetworks/github.png"
import linked from "../../sources/images/socialNetworks/linkedin.png"
import {SocialItem} from "./sotialItem/Socialltem";
import {Slide} from 'react-awesome-reveal';
import {ContactForm} from "./contactForm/ContactForm";
import {LinearProgress, Stack} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {ContactModal} from "./contactModal/ContactModal";
import {SetIsSendMessageAC} from "../../redux/AppReduser";


export const Contact = () => {
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.loading)
    const isSendForm = useSelector<AppRootStateType, boolean>(state => state.app.contact.isSendForm)
    let dispatch = useDispatch()

    const CloseOnClickHandler = () => {
        dispatch(SetIsSendMessageAC(false))
    }

    return (
        <div className={s.supportBg}>
            {isSendForm && <ContactModal close={CloseOnClickHandler}/>}
            <Slide direction="down">
                <div className={s.contact}>
                    {isLoading && <Stack sx={{width: '100%', color: 'grey.500'}}><LinearProgress
                        color={"inherit"}/></Stack>}
                    <Title bgTitle={"contact"} mainTitle={"Get in "} spanText={"touch"} extraClass={s.contactTitle}/>
                    <div className={s.bodyWrapper}>
                        <div className={s.content}>
                            <div className={s.blockInfo}>
                                <h3 className={s.titleH3}>Don't be shy !</h3>
                                <div className={s.info}>
                                    Feel free to get in touch with me. I am always open to discussing new projects,
                                    creative
                                    ideas or opportunities to be part of your visions.
                                </div>
                                <div>
                                    <ExtraInfoItem image={MailMe} description={"Gorelic2000p@gmail.com"}
                                                   title={"Mail me"}/>
                                    <ExtraInfoItem image={PhoneMe}
                                                   description={"+375 29 6647668"}
                                                   title={"Call me"}/>
                                </div>
                                <div className={s.SocialContainer}>
                                    <a href="https://www.linkedin.com/in/polin%D0%B0-gorelova">
                                        <SocialItem image={linked}/></a>
                                    <a href="https://github.com/GorelovaP"> <SocialItem image={git}/></a>
                                    <a href="https://t.me/+375296647668"> <SocialItem image={telegram}/></a>
                                </div>

                            </div>
                            <div className={s.blockForm}>
                                <ContactForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
        </div>
    );
}

