import React from 'react';
import s from "./Contact.module.scss"
import {Button} from "../../common/button/Button";
import {Title} from "../../common/title/Title";
import {ExtraInfoItem} from "./extraInfoItem/ExtraInfoItem";
import PhoneMe from "../../sources/images/PhoneMe.png"
import MailMe from "../../sources/images/MailMe.png"
import telegram from "../../sources/images/socialNetworks/telegram.png"
import git from "../../sources/images/socialNetworks/github.png"
import linked from "../../sources/images/socialNetworks/linkedin.png"
import arrow from "../../sources/images/ArroyRight.png"
import {SocialItem} from "./sotialItem/Socialltem";
import {Input} from "../../common/input/Input";
import {TextArea} from "../../common/textArea/TextArea";

export const Contact = () => {
    return (
        <div className={s.contact}>
            <Title bgTitle={"contact"} mainTitle={"Get in "} spanText={"touch"}/>
            <div className={s.bodyWrapper}>
                <div className={s.content}>
                    <div className={s.blockInfo}>
                        <h3 className={s.titleH3}>Don't be shy !</h3>
                        <div className={s.info}>
                            Feel free to get in touch with me. I am always open to discussing new projects, creative
                            ideas or opportunities to be part of your visions.
                        </div>
                        <div>
                            <ExtraInfoItem image={MailMe} description={"Gorelic2000p@gmail.com"} title={"Mail me"}/>
                            <ExtraInfoItem image={PhoneMe} description={"+375 29 6647668"} title={"Call me"}/>
                        </div>
                        <div className={s.SocialContainer}>
                            <SocialItem image={linked}/>
                            <SocialItem image={git}/>
                            <SocialItem image={telegram}/>
                        </div>

                    </div>
                    <div className={s.blockForm}>
                        <form action="#" className={s.form}>
                            <Input type={"text"} className={s.input} placeholder={"Your name"}/>
                            <Input type={"email"} className={s.input} placeholder={"Your email"}/>
                            <Input type={"email"} className={s.input} placeholder={"Your subject"}/>

                            <TextArea className={s.textArea} placeholder={"Your message"}/>
                        </form>
                        <Button type={"submit"} text={"Отправить"} image={arrow}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

