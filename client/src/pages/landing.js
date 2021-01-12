import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './landing.css';
import {gsap} from 'gsap';

function Landing() {
    useEffect( () => {
        function beginAnimation () {
            // This is the timeline for animation
            /* Be sure to include the 'anim-fade' class on anything you want to fade in from opacity 0
                because stylesheets load before GSAP, and they will appear for a second otherwise */
            let timeline = gsap.timeline();
            timeline.fromTo(".title", 
                {scale: 0.8, x: -50, opacity: 0,},
                {scale: 1, x: 0, opacity: 1, duration: 1})
                .fromTo(".sign-link", 
                {opacity: 0},
                {opacity: 1, duration: 0.4})
                .fromTo("#about",
                {scale: 1, x: 0, opacity: 0,},
                {scale: 1, x: 0, opacity: 1, duration: 1})
                .fromTo("#credits > *", // select all children of #credits
                {opacity: 0, x: -50},
                {opacity: 1, x: 0, stagger: 0.1})
        }

        beginAnimation();
    })
    

    return (
        <section className='back-div'>
            <h1 className="title anim-fade">SurvEasy</h1>

            <section>
                <Link to='/signin' className="sign-link anim-fade">Sign in</Link>
                <Link to='/signup' className="sign-link anim-fade">Sign up</Link>
            </section>

            <p className="description" id="about">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>

            <p className="description" id="credits">
                <span className="anim-fade" >Created By:</span>
                <br/><a className="anim-fade" href="https://github.com/smundhada">Shubhangi Mundhada</a>
                <br/><a className="anim-fade" href="https://github.com/nbur4556">Nick Burt</a>
                <br/><a className="anim-fade" href="https://github.com/JesseJ713">Jesse Jackson</a>
                <br/><a className="anim-fade" href="https://github.com/Sakiskid">Tyler Smith</a>
            </p>
        </section>
    )
}

export default Landing;