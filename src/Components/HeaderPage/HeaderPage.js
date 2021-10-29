
import React from 'react';
import { FaCookieBite,FaInstagram,FaTwitter } from 'react-icons/fa';
import { ImCart, ImFacebook} from 'react-icons/im';
import { GiCook, GiTalk} from 'react-icons/gi';
import { RiAccountCircleLine } from 'react-icons/ri';
import { TiLocation } from 'react-icons/ti';
import './HeaderPage.scss';
const HeaderPage = () => {


    return (

        <React.Fragment>
            <div className="header-info pt-4 container nav-top">
                <div className="row" >

                    <div className="col-md-3 header-details"><GiTalk/><GiCook/></div>
                    <div className="col-md-3 header-details"><TiLocation />Location</div>
                    <div className="col-md-2 header-details"><FaCookieBite /></div>
                    <div className="col-md-2 header-details">email</div>
                    <div className="col-md-1 header-details"><FaTwitter/> &nbsp;<FaInstagram /> <ImFacebook /></div>
                </div>

            </div>
            <hr></hr>
        </React.Fragment>
    )

}

export default HeaderPage;