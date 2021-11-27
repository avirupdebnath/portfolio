import React from 'react';
import "../css/blackCircularOutlineBtn.css"

function HollowBlackCircularButton(props) {
    return (
        <div className="dark-button-holder">
           <button type="button" class="dark-btn btn btn-outline-dark" style={{display:`${props.display}`, marginTop:`${props.marginTop}`}}>
            <i class="fas fa-arrow-right"></i>
           </button>
        </div>
    );
}

export default HollowBlackCircularButton;