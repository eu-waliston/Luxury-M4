import React from "react";
import styled from "styled-components";

const ContactUs = () => {
    return (
        <CONTACTUS__SECTION id="contact">

            <FORM>
                <h1>contact us</h1>
                <p>
                    Aliqua ullamco minim esse dolore aute magna mollit tempor enim ipsum sunt. <br /> Est irure deserunt velit reprehenderit mollit elit dolor incididunt eu. <br /> Qui excepteur officia ad reprehenderit ex nulla dolor commodo reprehenderit.
                </p>
                <h5>Tel: +11 12345 8947</h5>
                <h5>E-Mail: suppport@luxury.com</h5>

                <input className="input__normal" type={"text"} placeholder="Name" />
                <input className="input__normal" type={"text"} placeholder="Email" />
                <br />
                <input className="input__normal" type={"text"} placeholder="City" />
                <input className="input__normal" type={"text"} placeholder="Country" />
                <br />
                <input className="input__grande" type={"text"} placeholder="Subject" />
                <br />
                <input className="input__grande_2" type={"text"} placeholder="Message" />
                <br />
                <input className="input__btn" type={"submit"} value="Send" />

            </FORM>
            <img src={require("./images/company.png")} alt="company" className="company" />
        </CONTACTUS__SECTION>
    )
}
const CONTACTUS__SECTION = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    background-color: #fff;

    .company {
        float: right;
        position: relative;
        top: -50%;
        margin-right: 10%;
        width: 650px;
    }
`

const FORM = styled.div`

    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    /* font-family: 'Open Sans', sans-serif;
    font-family: 'Montserrat', sans-serif */
    /* color: #050547; */

    width: 700px;
    height: 650px;
    position: relative;
    top: 225px;
    margin-left: 10%;

    h1 {
        font-size: 45px;
        text-transform: capitalize;
        color: #050547;
        font-family: 'Montserrat', sans-serif;
        margin-left: 10px;
    }
    p, h5 {
        color: #050547;
        font-family: 'Montserrat', sans-serif;
        margin-left: 10px;
        margin-bottom: 25px;
    }

    input {
        border: 1px solid #050547;
        color: #050547;
        font-size: 18px;
        
    }
    
    input::-webkit-input-placeholder {
        color: #050547;
        position: relative;
        text-indent: 10px;
    }
    .input__normal {
        width: 300px;
        height: 50px;
        margin-bottom: 10px;
        margin-left: 10px;
    }

    .input__grande {
        margin-bottom: 10px;
        margin-left: 10px;
        width: 610px;
        height: 50px;
    }

    .input__grande_2 {
        margin-bottom: 10px;
        margin-left: 10px;
        width: 610px;
        height: 150px;
    }

    .input__btn {
        position: relative;
        width: 90px;
        height: 50px;
        top: -60px;
        margin-left: 75.5%;
        background-color: #fff;
    }

`

export default ContactUs;