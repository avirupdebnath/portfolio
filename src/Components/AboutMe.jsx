import React from 'react';
import '../css/about.css';
import Typical from "react-typical";
import CircularButton from './CircularButton';
import ProfileImage from './ProfileImage';
import HollowBlackCircularButton from './HollowBlackCircularButton';

export const AboutMe=() =>{
    return (
        <div className="wrapper">
        <div className="image-container">
        </div>
            <div className="about-container">
                    <h1 className="big-heading">Hi, <br /> I'm <span class="my-name">Avirup</span> Debnath.</h1>
                    <Typical className="heading"
                                loop={Infinity}
                                steps={[
                                    "Enthusiatic developer",
                                    1000,
                                    "UI/UX Designer", 
                                    1000,
                                    "Web Accessibility Advocate",
                                    1000, 
                                    "Full Stack Developer",
                                    1000,
                                    "Android Developer",
                                    1000,
                                    ]}
                                
                    />
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <HollowBlackCircularButton btnColor="btn-outline-dark" color="black" marginTop="5vh" />
            </div>
       </div>
    )
}