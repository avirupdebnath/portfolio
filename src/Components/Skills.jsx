import React from "react"
import '../css/master.css';
export const Skills = (props) => {
    return(
        <div class="skills-columns col-xl-4 col-lg-6 col-md-12 col-sm-12">
            <i class="skill-icons fas fa-magic fa-4x"></i>
            <div class="circle"></div>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <button class="btn btn-outline-dark btn-lg">Know More</button>
        </div>
    )
}
