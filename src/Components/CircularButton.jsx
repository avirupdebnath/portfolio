import React from 'react';
import "../css/circularButton.css"

function CircularButton(props) {
    return (
        <div className="button-holder d-flex justify-content-center align-items-end">
           <button type="button" class="btn btn-light" style={{display:`${props.display}`, marginTop:`${props.marginTop}`}}>
            <i style={{color:`${props.color}`}} class="fas fa-arrow-right"></i>
           </button>
        </div>
    );
}

export default CircularButton;