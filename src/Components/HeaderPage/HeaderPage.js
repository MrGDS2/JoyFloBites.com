
import React, { useState } from 'react';
import { FaCookieBite, FaInstagram } from 'react-icons/fa';
import { ImFacebook } from 'react-icons/im';
import { GiFist} from 'react-icons/gi';
import { SiTiktok } from 'react-icons/si';
import { TiLocation } from 'react-icons/ti';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
import './HeaderPage.scss';

const HeaderPage = () => {

    const [isOpen, setOpen] = useState(false);

    return (

        <React.Fragment>
            <div className="header-info pt-4 container nav-top">

                <div className="row" >
                    <ModalVideo channel='custom' autoplay isOpen={isOpen} url="https://firebasestorage.googleapis.com/v0/b/joyflobites.appspot.com/o/Videos%2FWhatsApp%20Video%202021-12-31%20at%209.40.10%20PM.mp4?alt=media&token=e08d2232-d79e-48f3-b417-482a8d794e17" onClose={() => setOpen(false)} />
                    <div className="col-md-3 header-details"><GiFist className="video-link" onClick={() => setOpen(true)} /><b className="black-owned">Black Owned</b></div>
                    <div className="col-md-3 header-details"><TiLocation />Staten Island</div>
                    <div className="col-md-2 header-details"><FaCookieBite /></div>
                    <div className="col-md-2 header-details">EST. 2020</div>
                    <div className="col-md-1 header-details">

                        <div className="row">
                            <div className="col-md-4 tiktok">
                                <a href="https://www.tiktok.com/@joyflobites?" className="top-link">
                                    <SiTiktok />
                                </a>
                            </div>
                            <div className="col-md-4 instagram">
                                <a href="https://www.instagram.com/joyflobites/" className="top-link">
                                    <FaInstagram />
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href="https://www.facebook.com/joyflobites" className="top-link">
                                    <ImFacebook />
                                </a>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
            <hr></hr>
        </React.Fragment>
    )

}

export default HeaderPage;