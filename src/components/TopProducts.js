import React from "react";
import styled from "styled-components";

const TopProducts = () => {
    return (
        <TOPPRODUCTS__SECTION id="top">
 
            <div className="grid_top_1">
                <img className="grid_top_img" src={require("./images/perola-pen.png")} alt="grid joias" />
                <img className="grid_top_img" src={require("./images/h-peq.png")} alt="grid joias" />
                <img className="grid_top_img" src={require("./images/nick-peq.png")} alt="grid joias" />
                <img className="grid_top_img" src={require("./images/w-peq.png")} alt="grid joias" />
            </div>
            <div className="other__side">
                <h1>best necklaces</h1>
                <p>
                    Eiusmod tempor Lorem esse eiusmod incididunt aute sunt nostrud aute pariatur culpa id nisi. <br /> Enim do sit exercitation dolor exercitation nisi cupidatat dolor.  Esse minim sint nostrud in esse.<br /> Tempor aliquip anim est sit in ipsum.
                    Eiusmod tempor Lorem esse eiusmod incididunt aute su
                </p>

                <a href="#collection" className="el">view collection</a>
            </div>

        </TOPPRODUCTS__SECTION>
    )
}

const TOPPRODUCTS__SECTION = styled.div`

    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    /* font-family: 'Open Sans', sans-serif;
    font-family: 'Montserrat', sans-serif */
    /* color: #050547; */

    width: 100%;
    height: 100vh;
    position: relative;
    background-color: #fff;

    .grid_top_1 {
        display: grid;
        grid-template-columns: repeat(2, 400px);
        gap: 10px;
        position: relative;
        top:28%;
        margin-left: 11%;
        .grid_top_img {
            width: 400px;
            box-shadow: 4px 4px 12px rgba(0,0,0, 0.15);
            &:hover {
                transition: all 0.8s;
                transform: scale(1.4);
            }
        }
    }

    .other__side {
        float: right;
        position: relative;
        top: -15%;
        margin-right: 5%;

        h1 {
            font-size: 60px;
            text-transform: capitalize;
            color: #050547;
            font-family: 'Montserrat', sans-serif 
        }

        p {
            font-size: 16px;
        }
        .el {
            position: relative;
            top: 35px;
            font-size: 18px;
            text-decoration: none;
            background-color: #050547;
            color: #fff;
            padding: 20px;
            text-transform: capitalize;
            font-family: 'Open Sans', sans-serif;

            &:hover {
                transition: all 0.8s;
                color: #050547;
                background-color: #fff;
            }
        }
    }

`

export default TopProducts;