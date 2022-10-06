import React from "react";
import { Col } from "react-bootstrap";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
    return (
        <div className="container mx-auto  footer col-6  row">
    
            <Col >
                 
                <div className="socialMedia  ">

                    <p className="text-light fs-6">
                        {" "}
                        <a
                            className="text-light"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <BsInstagram className=" socialMediaIconInstagram  " />
                        </a>{" "}
                        Instagram
                    </p>
                    <p className="text-light fs-6">
                        {" "}
                        <a
                            className="text-light"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <BsFacebook className=" socialMediaIconFacebook  " />
                        </a>{" "}
                        Facebook
                    </p>
                    <p className="text-light fs-6">
                        {" "}
                        <a
                            className="text-light"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <BsWhatsapp className=" socialMediaIconWhatsapp  " />
                        </a>{" "}
                        Whatsapp
                    </p>
                </div>
            </Col>
            <hr></hr>
            <div className="trademark">
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/federico-wuthrich-668633164/" ><p className="text-center  text-dark"> DESIGNED BY:  AGUILAR EDUARDO</p></a>
            </div>
        </div>

    );
}
