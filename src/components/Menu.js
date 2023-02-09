import React from "react";
import styled from "styled-components";

const Menu = () => {
    return (
        <MENU>
            <img src={require("./images/logo.png")} alt="logo" className="logo" />
            <h3 className="text-h3">luxury m4</h3>
            <ul className="nav__bar">
                <a className="nav__item" href="/">home</a>
                <a className="nav__item" href="/">about us</a>
                <a className="nav__item" href="/">collection</a>
                <a className="nav__item" href="/">contact us</a>
                <a className="nav__item" href="/">top products</a>
                <a className="nav__item" href="/" >find us</a>
            </ul>
        </MENU>
    )
}

const MENU = styled.ul`

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

    background-color: rgb(255, 255, 255) !important;
    width: 100% !important;
    height: 150px !important;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.151) !important;
    position: fixed;
    z-index: 99999;

    .text-h3 {
        text-align: center !important;
        font-size: 28px !important;
        font-family: 'Montserrat', sans-serif !important;
        text-transform: capitalize !important;
        color: #050547;
    }

    .logo {
    width: 50px !important;
    position: relative !important;
    margin-left: 48.5% !important;
    top: 5px !important;
    }

    .nav__bar {
    display: grid !important;
    grid-template-columns: repeat(6, 150px) !important; 
    position: relative !important;
    margin-left: 28% !important;
    top: 20px !important;
    
    }

    .nav__item {
    font-size: 18px !important;
    list-style: none !important; 
    color: #050547;
    text-transform: capitalize !important;
    text-decoration: none !important;

        &:hover {
        transition: all 0.4s !important;
        margin-top: -5px ;
        }
    }
`

export default Menu;