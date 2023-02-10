import React from "react";
import styled from "styled-components";

const AboutUs = () => {
    return (
        <ABOUT__US id="about" >
            <div 
                className="section__1" 
                data-aos="fade-up"
                data-aos-duration="2000"
            >
                <div className="side__A">
                    <TITLE>our story</TITLE>
                    <p className="parent">Lorem ipsum dolor sit amet, consectetur adipisicing elitipsum dolor sit amet,elitipsum dolor sit amet <br /> consectetur adipisicing elitipsum dolor sit amet, consectetur adipisicing elit.elitipsum dolor sit amet</p>
                    <button>__ view collection</button>
                </div>
                
                <img
                    alt="joia"
                    src={require("./images/joia-gran.png")}
                    className="img_side_B"
                />
            </div>

            <div 
                className="section__2"
                data-aos="fade-up"
                data-aos-duration="2000"
            >

                <img
                    alt="joia"
                    src={require("./images/conjunto.png")}
                    className="img_side_A"
                />

                <div className="side__B">
                    <TITLE2>the necklaces and bracelets</TITLE2>
                    <div className="itens">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit aut iure ducimus reprehenderit asperiores ut possimus necessitatibus a fugit mollitia, ad quos incidunt consequatur distinctio error doloremque nobis. Quaerat, quas. ad quos incidunt consequatur distinctio error doloremque nobis. Quaerat, quas ad quos incidunt consequatur distinctio error doloremque nobis. Quaerat, quas</p>

                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit aut iure ducimus reprehenderit asperiores ut possimus necessitatibus a fugit mollitia, ad quos incidunt consequatur distinctio error doloremque nobis. Quaerat, quas. ad quos incidunt consequatur distinctio error doloremque nobis. Quaerat, quas ad quos incidunt consequatur distinctio error doloremque nobis. Quaerat, quas</p>
                    </div>
                </div>


            </div>
        </ABOUT__US>
    )
}
const ABOUT__US = styled.div`

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

    height: 130vh;
    width: 100%;

    //Section 1
    .section__1 {
        display: grid;
        grid-template-columns: repeat(2, 600px);
        align-items: center;
        margin-left: 25%;

        .side__A {
            position: relative;
            top: 80px;
            margin-left: -270px;
            button {
                background-color: transparent;
                border: none;
                font-size: 18px;
                color: #050547;
                font-family:'Montserrat', sans-serif !important;
                position: relative;
                top: 50px;

                &:hover {
                    transition: all 0.6s;
                    transform: scale(1.1);
                }
            }
            .parent {
                position: relative;
                top:10px;
            }
        }
        
        .img_side_B {
            float: right;
            width: 750px;
            box-shadow: 2px 2px 12px rgba(0,0,0, 0.30);
            border-radius: 5px;
            position: relative;
         
            top: 80px;
        }
        
    }

    //Section 2
    .section__2 {
        display: grid;
        align-items: center;
        margin-left: 25%;

        .side__B {
            float: right;
            position: relative;
            top: -300px;

            .itens {
                display: grid;
                grid-template-columns: repeat(2, 250px);
                position: relative;
                margin-left: 600px;
                top: 30px;
                column-gap: 35px;
            }
        }

        .img_side_A {
            float: left;
            width: 750px;
            box-shadow: 2px 2px 12px rgba(0,0,0, 0.30);
            border-radius: 5px;
            position: relative;
            margin-left: -280px;
            top: 150px;
        }
    }

`
const TITLE = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

    font-family: 'Montserrat', sans-serif !important;
    font-size: 58px;
    text-transform: capitalize;
`

const TITLE2 = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

    font-family: 'Montserrat', sans-serif !important;
    font-size: 35px;
    text-align: center;
    text-transform: capitalize;
    margin-left: 280px;
`
export default AboutUs;