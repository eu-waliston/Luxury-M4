import React from "react";
import './Menu.css'

const Menu = () => {
    return (
        <div className="menu">
            <img src={require("../images/logo.png")} alt="logo" className="logo" />
            <h3>luxury m4</h3>
            <ul className="navbar">
                <li className="nav__item">home</li>
                <li className="nav__item">about us</li>
                <li className="nav__item">collection</li>
                <li className="nav__item">contact us</li>
                <li className="nav__item">best products</li>
                <li className="nav__item">find us</li>
            </ul>
        </div>
    )
}

export default Menu;