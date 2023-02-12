import React from "react";
import styled from "styled-components";

const FindUs = () => {
    return (
        <FINDUS__SECTION id="findUs">
            <INFO__SIDE>
                <img src={require("./images/nick-gran.png")} alt="joia" />
                <h4>the bracelet and necklace boutique</h4>
                <p>Laboris tempor sunt reprehenderit qui Lorem reprehenderit</p>
                <div className="days__grid">
                    <div className="days">
                        <p>monday</p>
                        <p>thuesday</p>
                        <p>wednesday</p>
                        <p>thursday</p>
                        <p>friday</p>
                        <p>saturday</p>
                        <p>sunday</p>
                    </div>
                    <div className="hours">
                        <p>13:00 - 17:45</p>
                        <p>10:00 - 17:45</p>
                        <p>10:00 - 17:45</p>
                        <p>10:00 - 17:45</p>
                        <p>10:00 - 17:45</p>
                        <p>10:00 - 17:45</p>
                        <p>13:00 - 17:00</p>
                    </div>

                </div>

                <a href="https://www.google.com.br/maps/place/Getty+Center/@34.0191443,-118.9860266,10z/data=!4m13!1m7!3m6!1s0x80c2c75ddc27da13:0xe22fdf6f254608f4!2sLos+Angeles,+CA,+EUA!3b1!8m2!3d34.0522342!4d-118.2436849!3m4!1s0x80c2bcd74227366f:0xda784a5a15aaaa25!8m2!3d34.0780358!4d-118.4740954" target="_blank" rel="noreferrer" className="btn__map">get direction</a>
            </INFO__SIDE>

            <MAP__SIDE>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423291.3456274135!2d-118.98602660111686!3d34.0191443098851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bcd74227366f%3A0xda784a5a15aaaa25!2sGetty%20Center!5e0!3m2!1spt-BR!2sbr!4v1676159481642!5m2!1spt-BR!2sbr" width="900" height="600" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="map"></iframe>
            </MAP__SIDE>
            <BOTTOM>
                <h5>2023 - all rights reserved.</h5>
            </BOTTOM>
        </FINDUS__SECTION>
    )
}

const FINDUS__SECTION = styled.div`

width: 100%;
    height: 110vh;
    position: relative;
    background-color: #fff;
`
const INFO__SIDE = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


    /* font-family: 'Open Sans', sans-serif; */
    font-family: 'Montserrat', sans-serif;

    float: left;
    position: relative;
    top: 16%;
    margin-left: 5%;
    color: #050547;
    h4 {
        font-size: 25px;
    }
    h4, p {
        position: relative;
        top: 25px;
        text-transform: capitalize;
    }

    .days__grid {
        display: grid;
        grid-template-columns: repeat(2, 150px);
        position: relative;
        top: 30px;
        font-size: 18px;
        text-transform: capitalize;
    }

    .btn__map {
        position: relative;
        top: -16px;
        font-size: 19px;
        text-decoration: none;
        text-transform: capitalize;
        color: #050547;
        background-color: #fff;
        padding: 20px;
        margin-left: 60%;

        &:hover {
            transition: all 0.8s;
            color: #fff;
            background-color: #050547;
        }
    }
`
const MAP__SIDE = styled.div`
    float: right;
    position: relative;
    top: 240px;
    margin-right: 5%;
    box-shadow: 3px 3px 12px rgba(0,0,0, 0.20);
    background-color: #fff;

`
const BOTTOM = styled.div `
    clear: both;
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 300px);
    margin-left: 2.5%;
    top: 250px;
    text-align: center;
    color: #050547;
`
export default FindUs;