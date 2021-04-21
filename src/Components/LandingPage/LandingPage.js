import React from 'react';
// import { useHistory } from 'react-router-dom';
import Logo from '../../Images/joyflo-bites-v3.png'
import { FaLongArrowAltRight } from 'react-icons/fa';
import AboutPage from '../AboutPage/AboutPage';
import './LandingPage.scss';

const LandingPage = () => {

    // let history = useHistory();

    // const onBtnClick = () => {
    //     history.push('/Contact');
    // }

    return (
        <React.Fragment>
            <div className="main-img">
                <div className="row">
                    <div className="container text-center">
                        <div className="col-md-12">
                            <img src={Logo} className="company-name" alt="floLogo" />
                            <button className="company-btn">Order Today <FaLongArrowAltRight /></button>
                        </div>

                    </div>
                </div>
            </div>
            <AboutPage />



        </React.Fragment>
    );
}
export default LandingPage;