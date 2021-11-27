import styled from "styled-components";
import React from "react";

const CircularBtn =styled.button.attrs(() => ({
    className: 'btn btn-light'
}))`
    display:${props => props.displays};
    margin: 0;
    margin-top:${props => props.marginTop};
    height: 8vh;
    width: 8vh;
    padding: 0;
    font-size: 2vh;
    border-radius: 50%;
    opacity: 0.8;

    i{
      pointer-events: none;
      color:${props => props.color};
      font-size: 2vh;
    }

    &:hover{
      transform: scale(1.2);

    @media (max-width: 1200px){
      display:'block';
    }
  }
`
function StyledCircularButton(props) {
    return (
        <div className="button-holder d-flex justify-content-center align-items-end">
           <CircularBtn displays={props.display} color={props.color} marginTop={props.marginTop}> 
            <i class="fas fa-arrow-right"></i>
           </CircularBtn>
        </div>
    );
}

export default StyledCircularButton;
