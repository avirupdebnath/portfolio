import { useState } from "react";
import "../css/tile.css";
import { A } from "hookrouter";
import StyledCircularButton from "../StyledComponents/StyledCircularBtn";
import styled from "styled-components";

const Tile = styled.div`
    float:left;
    margin: 0;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-image: url(${props => props.backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 25%;

    A{
        margin: 0;
        padding: 0;
    }
    &:hover{
        
    }

    &:hover A{
        text-decoration: none;
    }

    h2{
        font-size: 40px;
        color: white;
    }

    @media (max-width: 1024px){
        float:none;
        margin: 0;
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        background-image: url(${props => props.fixedImage});
        background-repeat: no-repeat;
        background-size: cover;
        height: 100vh;
        ${'' /* max-height: -webkit-fill-available; */}
        width: 100%;
}`







export const StyledTile = (props) => {
    const imgs = ['', `${props.background}`]
    let [bcgImg, setBcgImg] = useState(imgs[0])
    
    let displayStates = ['none', ''];
    const [displayState, setdisplayState] = useState(displayStates[0]);

    let textColorCustom =['white','#ffd369'];
    const [textColor,setTextColor] =useState(textColorCustom[0]);

    let textTransform =['','scale(1.2)'];
    const [transform,setTransform] =useState(textTransform[0]);
    
    
    return(
        
        <Tile backgroundImage={bcgImg} fixedImage={props.background}>
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
                    <StyledCircularButton display={displayState} color="black" marginTop="100px"/>
                </A>
        </Tile>
    )
}

