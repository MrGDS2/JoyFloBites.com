import React from 'react';
import FlourLogo from '../../Images/flour_logo.png';
import { FaLongArrowAltRight } from 'react-icons/fa';
import './AboutPage.scss';



const AboutPage = () => {

    return (
        <React.Fragment>
            <div className="about-description" id="about">
                <div className="row text-center">
                    <div className="container">
                        <div className="col-md-12 about-text mt-5">
                            <h1 className="about-title">About Us</h1>
                        </div>
                        <div className="col-md-12 mt-5">
                            <p><b>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</b></p>
                            <button className="about-btn mt-3">Read more <FaLongArrowAltRight /></button>
                        </div>


                    </div>
                </div>

            </div>
        </React.Fragment>

    )

}

export default AboutPage;