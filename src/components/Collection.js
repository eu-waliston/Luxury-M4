import React from "react";
import styled from "styled-components";

const Collection = () => {
    return (
        <COLLENCTION__SECTION id="collection">
            <GRID__PRICES>
                <p>$ 150</p>
                <p>$ 150</p>
                <p>$ 150</p>
                <p>$ 150</p>
                <p>$ 150</p>
                <p>$ 150</p>
            </GRID__PRICES>
            <GRID_IMAGES>
                <img className="img__size" src={require("./images/perola-gran.png")} alt="grid joias" />
                <img className="img__size" src={require("./images/w.med.png")} alt="grid joias" />
                <img className="img__size" src={require("./images/joia-gran.png")} alt="grid joias" />
                <img className="img__size" src={require("./images/h-gran.png")} alt="grid joias" />
                <img className="img__size" src={require("./images/store.jpg.png")} alt="grid joias" />
                <img className="img__size" src={require("./images/nick-gran.png")} alt="grid joias" />
            </GRID_IMAGES>
            <BOTTON_SECTION>
                <p>
                    hurry up! the offer is limited
                </p>
                <h1>
                    special offer for you
                </h1>
                <a href="#top" className="btu">view Best Products</a>
            </BOTTON_SECTION>
        </COLLENCTION__SECTION>
    )
}
const COLLENCTION__SECTION = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    background-color:#fff;
`
const GRID_IMAGES = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 450px);
    position: relative;
    margin-left: 13%;
    top: 150px;
    gap: 30px;

    .img__size {
        width: 400px;
        box-shadow: 5px 5px 12px rgba(0,0,0, 0.20);
    }
`
const GRID__PRICES = styled.div`
    z-index: 9999;
    display: grid;
    grid-template-columns: repeat(3, 470px);
    position: absolute;
    color: #fff;
    font-size: 22px;
    font-weight: bold;
    row-gap: 250px;
    top: 370px;
    margin-left: 23%;

    p {
        background-color: rgba(0,0,0, 0.80);
        width: 65px;
        height: 32px;
        border-radius: 5px;
        text-align: center;

        &:hover {
            transition: all 0.8s;
            color: #000;
            background-color: #fff;
            cursor: pointer;
        }
    }
`
const BOTTON_SECTION = styled.div `
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');



    background-color: #F9E5E4;
    position: relative;
    top: 232px;
    height: 130px;
    box-shadow: 5px -8px 14px rgba(0,0,0, 0.10);

    .btu {
        float: right;
        font-size: 20px;
        text-decoration: none;
        font-family: 'Open Sans', sans-serif;
        color: #050547;
        position: relative;
        top: -60px;
        margin-right: 15.5%;
        background-color:#fff;
        padding: 15px;
        text-transform: capitalize;

        &:hover {
            color:#fff;
            background-color: #050547;
            transition: all 0.8s;
        }
    }

    h1 {
        position: relative;
        top: 18px;
        margin-left: 13%;
        text-transform: capitalize;
        font-family: 'Montserrat', sans-serif;
        color: #050547;
    }

    p {
        font-family: 'Open Sans', sans-serif;
        position: relative;
        margin-left: 13%;
        top: 15px;
        color: #050547;
        font-size: 18px;
    }
`
export default Collection;