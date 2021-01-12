import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './landing.css';
import { gsap } from 'gsap';

function Landing() {
    useEffect(() => {
        function beginAnimation() {
            let timeline = gsap.timeline();
            timeline.fromTo(".title",
                { scale: 0.8, x: 0, opacity: 0, },
                { scale: 1, x: 0, opacity: 1, duration: 1 })
                .fromTo("#about",
                    { scale: 0.8, x: 0, opacity: 0, },
                    { scale: 1, x: 0, opacity: 1, duration: 1 })

        }

        beginAnimation();
    })


    return (
        <section className='back-div'>
            <h1 className="title">SurvEasy</h1>

            <p className="description" id="about">
                Providing quality surveys, and detailed analytics.
            </p>

            <section>
                <Link to='/signin' className="btn-link">Sign in</Link>
                <Link to='/signup' className="btn-link">Sign up</Link>
            </section>

            <p className="description" id="credits">
                Created By:
                <br /><a href="https://github.com/smundhada">Shubhangi Mundhada</a>
                <br /><a href="https://github.com/nbur4556">Nick Burt</a>
                <br /><a href="https://github.com/JesseJ713">Jesse Jackson</a>
                <br /><a href="https://github.com/Sakiskid">Tyler Smith</a>
            </p>
        </section>
    )
}

export default Landing;