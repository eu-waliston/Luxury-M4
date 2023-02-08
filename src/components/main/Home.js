import React from "react";
import './Home.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {

    return (
        <div className="home__section">
            <div class="slider">
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("../images/slide-1.jpg")}
                            alt="First slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("../images/slide-2.jpg")}
                            alt="First slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("../images/slide-3.jpg")}
                            alt="First slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("../images/slide-4.jpg")}
                            alt="First slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("../images/slide-5.jpg")}
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
        </div>
    )
}

export default Home;