import { setLinkProps } from 'hookrouter';
import React from 'react';
import "../css/profileImage.css"

function ProfileImage(props) {
    return (
        <div>
            <img className="title-image" src={props.source} 
            style={{width:`${props.width}`}} />
        </div>
    );
}

export default ProfileImage;