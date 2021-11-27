import React from "react"
import styled from "styled-components";
import '../css/footer.css';
import SocialIcons from "../Components/SocialIcons"


const Footer = styled.div`
    position: fixed;
    left: 0;
    overflow: hidden;
    bottom: 0;
    width: 100%;
    color:white;
    padding: 1%;
    margin: 0;
    color:${props => props.textColor};
    p{
        padding: 0 0;
        margin: 0; 
        bottom: 0;
        font-size: 16px;
        color:${props => props.textColor_p};
        float: right;
    }
    @media (max-width: 1024px){
       position:relative;
       background-color:#191919;
    }
`



export const StyledFooter = (props) => {
    // const [style, setStyle] = useState({display: 'none'});

    return(
            <Footer class="footer-main">
                {/* <a href="#"  className="social"><i class="social-icons fab fa-linkedin-in fa-2x" style={{color:`${props.textColor}`}}></i> LinkedIn </a> */}
                <SocialIcons classes="social-icons fab fa-linkedin-in fa-x" textColor={props.textColor} name="linkedIn"/>
                <SocialIcons classes="social-icons fab fa-twitter fa-x" textColor={props.textColor} name="twitter"/>
                <SocialIcons classes="social-icons fas fa-envelope fa-x" textColor={props.textColor} name="email"/>
                {/* <br /> */}
                <p className="footer-p"  style={{color:`${props.textColor_p}`}}> 2021 © Avirup Debnath</p>
            </Footer>
    )
}