import React from 'react';
import { A } from "hookrouter";
import '../css/navbar.css';


export const Navbar =(props) =>{
    return (
        <nav id="navbar_top" class="navbar navbar-expand navbar-dark"> 
            <div class="navbar-container container-fluid">
                <A class="navbar-brand" href="#">
                    <img class="logo-image" src="images/logo.png" alt="logo"/>
                </A>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="menu-button fas fa-bars fa-2x"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item px-1" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <A class="nav-link" href="/"  style={{color:`${props.textColor}`}}>Home</A>
                    </li>
                    <li class="nav-item px-1" data-toggle="collapse" data-target=".navbar-collapse.show">
                    <A class="nav-link" href="/download-resume" style={{color:`${props.textColor}`}}>Download Resume</A>
                    </li>
                    <li class="nav-item px-1" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <A class="nav-link" href="#cta"  style={{color:`${props.textColor}`}}>Get In Touch</A>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}