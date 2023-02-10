import React from "react";
import styled from "styled-components";

const Collection = () => {
    return (
        <MAIN id="collection">
            <GRID__IMAGES>
                <img src={require("./images/perola-gran.png")} alt="Grid IMG" className="img__brand"/>
                <img src={require("./images/w.med.png")} alt="Grid IMG" className="img__brand"/>
                <img src={require("./images/joia-gran.png")} alt="Grid IMG" className="img__brand"/>
                <img src={require("./images/h-gran.png")} alt="Grid IMG" className="img__brand"/>
                <img src={require("./images/store.jpg.png")} alt="Grid IMG" className="img__brand"/>
                <img src={require("./images/nick-gran.png")} alt="Grid IMG" className="img__brand"/>
            </GRID__IMAGES>

            <SPECIAL>
                <p className="pp">Hurry up! the offer is limited</p>
                <h1 className="hh">special offer for you</h1>
                <button className="btn__S2">__ view collection</button>
            </SPECIAL>

        </MAIN>
    )
}

const MAIN = styled.div `
    width: 100%;
    height: 80vh;
`
const GRID__IMAGES = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 400px);
    position: relative;
    margin-left: 20%;
    gap: 30px;
    top: 20%;

    .img__brand {
        width: 400px;
        border-radius: 5px;
        box-shadow: 5px 5px 12px rgba(1,1,1,0.21);
        

        &:hover {
            transition: all 0.8s;
            transform: scale(1.5);
            position: relative;
            top: 25px;
            border-radius: 10px;
        }
    }
`
const SPECIAL = styled.div `
    background: rgb(255,216,131);
    background: linear-gradient(120deg, rgba(255,216,131,1) 0%, rgba(255,216,131,1) 44%, rgba(255,216,131,1) 100%);

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');


    position: relative;
    width: 100%;
    height: 20vh;
    background-color: pink;
    top: 350px;
    box-shadow: 1px -5px 15px rgba(0,0,0,0.25);

    .btn__S2 {
        background-color: transparent;
        border: none;
        font-size: 18px;
        position: relative;
        margin-left: 78%;
        color:  #050547;
        font-family: 'Montserrat', sans-serif !important;


        &:hover {
            transform: scale(1.1);
            transition: all 0.6s;
        }
    }

    .pp, .hh {
        position: relative;
        margin-left: 20%;
        top: 50px;
        font-family: 'Montserrat', sans-serif !important;
    } 
    .hh {
        font-size: 40px;
        text-transform: capitalize;
    }
`
export default Collection;