import React from "react"
import { Skills } from "../Components/Skills";
import '../css/master.css';

export const WhatICanDo = () => {

    const skills = [
        {name:"UI and UX Designing",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {name:"Web Development",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
    ]

    return(
        <section id="skills">
        <div class="container-fluid">
            <div class="row">
                {/* <div class="col-lg-12">
                    <h2 class="section-heading">What I Can Do</h2>
                    <hr />
                </div> */}
                 {skills.map(skill => {
                     return <Skills name= {skill.name} description ={skill.description}/>
                 })}    
              </div>
          </div>
    </section>
    )
}