import React from "react";
import './Menu.css'

const Menu = () => {
    return (
        <div className="menu">
            <img src={require("../images/logo.png")} alt="logo" className="logo" />
            <h3>luxury m4</h3>
            <ul className="nav__bar">
                <a className="nav__item" href="/">home</a>
                <a className="nav__item" href="/">about us</a>
                <a className="nav__item" href="/">collection</a>
                <a className="nav__item" href="/">contact us</a>
                <a className="nav__item" href="/">top products</a>
                <a className="nav__item" href="/" >find us</a>
            </ul>
        </div>
    )
}

export default Menu;