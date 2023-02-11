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
        </COLLENCTION__SECTION>
    )
}
const COLLENCTION__SECTION = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    background-color:blue;
`
const GRID_IMAGES = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 450px);
    position: relative;
    margin-left: 13%;
    top: 80px;
    gap: 30px;

    .img__size {
        width: 450px;
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
    row-gap: 290px;
    top: 330px;
    margin-left: 24%;

    p {
        background-color: rgba(0,0,0, 0.80);
        width: 60px;
        height: 32px;
        border-radius: 5px;
    }
`

export default Collection;