import React from 'react';
import { SocialIcon } from 'react-social-icons';
import floIcon from '../../Images/joyflo-bites-v1.png';
import './Footer.scss';

const Footer = () => {

    let color = "#FFFFFF";


    return (
        <div className="pt-5 pb-3 bg-light text-center" id="footer">
            <div className="container">
                <div className="row">
                    <div className=" col-md-4 mb-4">
                        <a href='/'> <img src={floIcon} height="50px" alt="logo" id="footer-logo" /></a>
                    </div>
                    <div className=" col-md-4 text-center">
                        <div className="row">
                            <div className="col-md-3 mb-2">
                                <SocialIcon url="https://www.tiktok.com/@joyflobites?" bgColor={color} />
                            </div>

                            <div className="col-md-3 mb-2">
                                <SocialIcon url="https://www.instagram.com/joyflobites/" bgColor={color} />
                            </div>

                            <div className="col-md-3 mb-2">
                                <SocialIcon url="https://www.facebook.com/joyflobites" bgColor={color} />
                            </div>



                        </div>

                    </div>
                    <div className="col-md-4"><h6 className="font-weight-bolder line-height footer-text">CONTACT INFORMATION</h6><p className="footer-text">JoyFloBites@gmail.com</p>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-11 mt-4">
                        <span className="text-center"><p className="copyright text-muted">©2023 by <a href="https://github.com/MrGDS2" className="my-credit">MrGDS2</a></p></span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;