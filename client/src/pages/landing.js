import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './landing.css';
import {gsap} from 'gsap';

function Landing() {
    useEffect( () => {
        function beginAnimation () {
            gsap.fromTo(".title", 
            {scale: 0.8, x: -50, opacity: 0,},
            {scale: 0.8, x: 0, opacity: 1, duration: 1});
        }

        beginAnimation();
    })
    

    return (
        <section className='back-div'>
            <h1 className="title">SurvEasy</h1>

            <section>
                <Link to='/signin' style={{ margin: '1em' }}>Sign in</Link>
                <Link to='/signup' style={{ margin: '1em' }}>Sign up</Link>
            </section>

            <p className="description" id="about">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>

            <p className="description" id="credits">
                Created By: 
                <br/><a href="https://github.com/smundhada">Shubhangi Mundhada</a>
                <br/><a href="https://github.com/nbur4556">Nick Burt</a>
                <br/><a href="https://github.com/JesseJ713">Jesse Jackson</a>
                <br/><a href="https://github.com/Sakiskid">Tyler Smith</a>
            </p>
        </section>
    )
}

export default Landing;