import React, { useEffect, useState } from "react";
import '../css/socialIcons.css';

function SocialIcons(props) {
    let states = ['none', ''];
    const [style, setStyle] = useState(states[0]);
    return (
            <a href="#" className="social">
            <i class= {`${props.classes}`} style={{color:`${props.textColor}`}} 
                onMouseEnter={() => setStyle(states[1])} 
                onMouseLeave={()=>setStyle(states[0])}></i> 
                    <span className="social-names" style={{ display:`${style}`, color:`${props.textColor}`}} 
                        onMouseEnter={() => setStyle(states[1])} 
                        onMouseLeave={()=>setStyle(states[0])}> 
                        {props.name} 
                    </span> 
            </a>
    );
}

export default SocialIcons;