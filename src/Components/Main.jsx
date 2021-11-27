import React from 'react';
import { StyledTile } from '../StyledComponents/StyledTile';
import { Tile } from './Tile';

export const  Main = (props) => {
    return (
            <div className="tile-container">
                <StyledTile name="About Me" background="/images/about-me.jpg" link="/about-me"/>
                <StyledTile name="Experience" background="/images/experience.jpg" link="/experience"/>
                <StyledTile name="Projects" background="/images/project.png" link="/projects"/>
                <StyledTile name="Skills" background="/images/skills.jpg" link="/skills"/>
             </div> 
       
    );
}
