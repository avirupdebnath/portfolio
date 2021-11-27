import React from 'react';
import { Main } from '../Components/Main';
import TsParticles from '../Components/TsParticles';
import { StyledNavbar } from '../StyledComponents/StyledNavbar';
import styled from 'styled-components';
import { StyledFooter } from '../StyledComponents/StyledFooter';

const ParticlesDiv = styled.div`
    @media (max-width: 1024px){
       display:none;
    }
`
function Home(props) {
    return (
        <div>
            <ParticlesDiv>
                <TsParticles />
            </ParticlesDiv>
            <StyledNavbar textColor="white"/>
            <Main />
            <StyledFooter textColor="white"/>
        </div>
    );
}

export default Home;