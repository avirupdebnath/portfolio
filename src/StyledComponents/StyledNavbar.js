import React from 'react';
import { A } from "hookrouter";
import styled from 'styled-components';


const Nav = styled.div`
    position:fixed;
    background-color:transparent;
    margin:0;
    padding:0;
    width:100%;
    z-index:1;
    @media (max-width: 1024px){
        overflow:auto;
        background-color:black;
        opacity:0.9;
        position:sticky;
        top:0;
    }
`
const UL =styled.ul`
    display:flex;
    overflow:hidden;
    float:right;
    justify-content: flex-end;
    width: 50%;
    padding: 20px 50px;
    margin:0;
    @media (max-width: 1024px){
        width:100%;
        justify-content:center;
    }
`

const Logo =styled.div`
    display:flex;
    margin: 0;
    padding: 0;
    justify-content: flex-start;
    align-items:center;
    float:left;
    width: 50%;
    p{
        color:white;
        line-height:1;
        padding: 30px 60px;
        font-size: 18px;
    }
    @media (max-width: 1024px){
        width:100%;
        padding:0px;
        margin:auto;
        justify-content:center;
        p{
            padding:30px 0px 15px 0px;
        }
    }
`

const ListItems =styled.li`
    float:left;
    list-style-type:none;
    padding: 10px 20px;
    A{
        color:${props => props.color};
        text-decoration:none;
    }
    &:hover A{
        color:${props => props.color};
        text-decoration:line-through;
    }
    @media (max-width: 1023px){
        padding: 0px;
        margin:auto;
    }

`



export const StyledNavbar =(props) =>{
    return (
        <Nav>
                <Logo className="mame-logo">
                    <p><strong> AVIRUP </strong> DEBNATH </p>
                </Logo>
                <UL >
                        <ListItems color={props.textColor}>
                            <A  href="/"  >Home</A>
                        </ListItems>
                        <ListItems color={props.textColor}>
                            <A href="/download-resume" >Resume</A>
                        </ListItems>
                        <ListItems color={props.textColor}>
                            <A href="#cta" >Contact</A>
                        </ListItems>
                </UL>
            
         
         </Nav>
    )
}