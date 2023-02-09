import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import styled from "styled-components";



const Home = () => {

    return (
        <HOME__SECTION>
            <div class="slider">
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("./images/slide-1.jpg")}
                            alt="First slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("./images/slide-2.jpg")}
                            alt="First slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("./images/slide-3.jpg")}
                            alt="First slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("./images/slide-4.jpg")}
                            alt="First slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("./images/slide-5.jpg")}
                            alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="info">
                <h4>present your products</h4>
                <h1>bracelets and necklaces</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Nulla, neque ipsam totam sed pariatur dolore cumque eius. <br /> Maxime optio temporibus tempora quidem ipsum est eveniet dolorum, <br /> eaque omnis placeat aperiam.</p>
                <a href="/" className="btn">____ start shoping</a>
            </div>
        </HOME__SECTION>
    )
}

const HOME__SECTION = styled.div`


    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');


    :root {
        --font--site: 'Montserrat', sans-serif !important;
        --font--text: 'Open Sans', sans-serif !important;
        --color--site: #050547 !important;
    }

    .carousel {
        filter: brightness(0.6);
        top: -15px;
    }


    .info {
        position: absolute;
        top:600px;
        z-index: 2222;
        color: aliceblue;
        text-align: center;
        text-transform: capitalize;
        margin-left: 28%;
    }

    .info > h1 {
        font-size: 70px;
        font-family: var(--font--site);
    }

    .btn {
        color: aliceblue !important;
    }

@media (max-width: 900px) {
    .carousel {
      width:auto;
      height:auto;
    }
}

`
export default Home;