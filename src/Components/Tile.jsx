import { useState } from "react";
import "../css/tile.css";
import { A } from "hookrouter";
import CircularButton from "./CircularButton";
import StyledCircularButton from "../StyledComponents/StyledCircularBtn";
export const Tile = (props) => {
    const imgs = ['', `${props.background}`]
    let [bcgImg, setBcgImg] = useState(imgs[0])
    
    let displayStates = ['none', ''];
    const [displayState, setdisplayState] = useState(displayStates[0]);

    let textColorCustom =['white','#ffd369'];
    const [textColor,setTextColor] =useState(textColorCustom[0]);

    let textTransform =['','scale(1.2)'];
    const [transform,setTransform] =useState(textTransform[0]);
    
    return(
        
        <div className="tile" style={{ backgroundImage:`url(${bcgImg})`}}>
                <A href={props.link} className="my-container" 
                    onMouseEnter={ () => 
                        { 
                                setBcgImg(imgs[1]); 
                                setdisplayState(displayStates[1]);
                                setTextColor(textColorCustom[1]);
                                // setTransform(textTransform[1]);
                        }
                    } 
                    onMouseLeave={()=> 
                        { 
                            setBcgImg(imgs[0]); 
                            setdisplayState(displayStates[0]);
                            setTextColor(textColorCustom[0]);
                            //setTransform(textTransform[0]);
                        }
                    }>
                    <h2 className="tile-heading" style={{color:`${textColor}`, transform:`${transform}`}}>{props.name}</h2>
                    <StyledCircularButton display={displayState} color="black" marginTop="30vh"/>
                </A>
        </div>
    )
}

