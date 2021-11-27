import React from 'react';
import styled from 'styled-components';
import { AboutMe } from '../Components/AboutMe';
import { Footer } from '../Components/Footer';
import { Navbar } from '../Components/Navbar';
import TsParticles from '../Components/TsParticles';
import { StyledFooter } from '../StyledComponents/StyledFooter';
import { StyledNavbar } from '../StyledComponents/StyledNavbar';

const ParticlesDiv = styled.div`
    @media (max-width: 1024px){
       display:none;
    }
`

function Introduction(props) {
    return (
        <div>
            <ParticlesDiv>
                <TsParticles />
            </ParticlesDiv>
            <StyledNavbar textColor="white"/>
            <AboutMe/>
            <StyledFooter textColor="white" textColor_p="white"/>
        </div>
    );
}

export default Introduction;