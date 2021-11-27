import React from "react"
import '../css/footer.css';
import SocialIcons from "./SocialIcons";
export const Footer = (props) => {
    // const [style, setStyle] = useState({display: 'none'});

    return(
    <section id="cta">
            <div class="footer-main">
                {/* <a href="#"  className="social"><i class="social-icons fab fa-linkedin-in fa-2x" style={{color:`${props.textColor}`}}></i> LinkedIn </a> */}
                <SocialIcons classes="social-icons fab fa-linkedin-in fa-x" textColor={props.textColor} name="linkedIn"/>
                <SocialIcons classes="social-icons fab fa-twitter fa-x" textColor={props.textColor} name="twitter"/>
                <SocialIcons classes="social-icons fas fa-envelope fa-x" textColor={props.textColor} name="email"/>
                {/* <br /> */}
                <p className="footer-p"  style={{color:`${props.textColor_p}`}}> 2021 © Avirup Debnath</p>
            </div>
    </section>
    )
}
