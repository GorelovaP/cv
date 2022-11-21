import React, {useCallback} from 'react';
import s from "./Home.module.scss"
import {Button} from "../../common/button/Button";
import arrow from "./../../sources/images/ArroyRight.png"
import {NavLink} from "react-router-dom";
import {PATH} from "../../common/pages/Pages";
import Particles from 'react-tsparticles';
import {loadFull} from "tsparticles";
import {Engine} from 'tsparticles-engine';
import Tilt from 'react-parallax-tilt';
import {Fade} from "react-awesome-reveal";


export const Home = () => {

    const options = {
        interactivity: {
            events: {
                onClick: {enable: true, mode: "push"},
                onHover: {
                    enable: true,
                    mode: "repulse",
                    parallax: {enable: false, force: 60, smooth: 5}
                },
                resize: true
            },
            modes: {
                push: {quantity: 4},
                repulse: {distance: 200, duration: 1}
            }
        },
        particles: {
            move: {
                enable: true,
                speed: 0.6,
            },
            opacity: {
                value: 0.2,
            }
        }
    }

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);


    return (

        <div className={s.home}>
            <Particles options={options} init={particlesInit} className={s.particles}/>
            <div className={s.home_color}>
            </div>
            <div className={s.wrapper}>
                <Tilt className={s.image} tiltMaxAngleX={2} tiltMaxAngleY={2}/>
                <div className={s.text}>
                    <Fade direction='down'>
                        <div className={s.text__headers}>
                            <h1 className={s.text__h1}>I'M GORELOVA POLINA.</h1>
                            <span className={s.span}>FRONTEND DEVELOPER</span>
                        </div>
                        <div className={s.text__description}>I'm a result oriented front-end developer with experience
                            in
                            creating SPA with React / Redux / TypeScript in team and independent. I am passionate about
                            building excellent software that improves the
                            lives of those around me.
                        </div>
                        <NavLink to={PATH.SKILLS}><Button text={"MORE ABOUT ME"} image={arrow}/></NavLink>
                    </Fade>
                </div>

            </div>
        </div>
    );
}

