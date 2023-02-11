import React from "react";
import styled from "styled-components";

const AboutUS = () => {
    return (
        <ABOUT__SECTION id="about">
            <div className="section__1">
                <div className="content__1">


                    <h1>our story</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.consequuntur rerum eum <br />accusamus atque.consequuntur rerum <br />eum accusamus atque.consequuntur rerum eum accusamus atque.</p>
                    <a
                        href="#collection"
                        className="btnsz"
                    >view collection</a>
                    <br />

                </div>

                <img src={require("./images/joia-gran.png")} alt="joia grande" className="img_1" />
            </div>

            <div className="section__2">
                <img src={require("./images/conjunto.png")} alt="collection" className="img_2" />
                <div className="content__2">
                    <h1>the necklaces and bracelets</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nobis ducimus obcaecati voluptatem! <br />Recusandae esse at quaerat tenetur, ad, debitis cumque optio, rem repellat facere reiciendis totam <br /> earum alias maiores.
                    </p>
                </div>
            </div>

        </ABOUT__SECTION>
    )
}
const ABOUT__SECTION = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');




    width: 100%;
    height: 100vh;
    position: relative;
    background-color: #fff;

    .section__1 {
        float: left;
        position: relative;
        margin-left: 10%;
        top: 30%;

        .content__1 {
            position: relative;
            top: -60px;

            h1 {
                font-size:62px;
                text-transform: capitalize;
                font-family: 'Montserrat', sans-serif;
                color: #050547;
            }

            p {
                font-family: 'Open Sans', sans-serif;
                color: #050547;
            }

            .btnsz {
                
                font-family: 'Open Sans', sans-serif;
                font-size: 20px;
                text-decoration: none;
                color: #fff;
                background-color: #050547;
                padding: 10px;
                position: relative;
                top: 20px;
                text-transform: capitalize;

                &:hover {
                    transition: all 0.8s;
                    color: #050547;
                    background-color: #fff;
                    padding: 10px;
                }
            }
        }

        img {
            width: 600px;
        }
    }
    .section__2 {
        float: right;
        position: relative;
        margin-right: 5%;
        top: 20%;

        .content__2 {
            position: relative;
            top: 50px;

            h1 {
                font-size:42px;
                text-transform: capitalize;
                font-family: 'Montserrat', sans-serif;
                color: #050547;
            }

            p {
                font-family: 'Open Sans', sans-serif;
                color: #050547;
            }
        }

        img {
            width: 600px;
        }
    }
`

export default AboutUS;