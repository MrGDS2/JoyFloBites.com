
import React from 'react';
import { FaCookieBite } from 'react-icons/fa';
import { ImCart, ImHeart} from 'react-icons/im';
import { RiAccountCircleLine } from 'react-icons/ri';
import { TiLocation } from 'react-icons/ti';
import './HeaderPage.scss';
const HeaderPage = () => {

    // const ref = useRef(null);

    // const handleClick = () => {
    //     ref.current.showModal();
    // }

    return (

        <React.Fragment>
            <div className="header-info pt-4 container text-muted nav-top">
                <div className="row" >

                    <div className="col-md-4 header-details">917-574-0612</div>
                    <div className="col-md-3 header-details"><TiLocation/>Location</div>
                    <div className="col-md-2 header-details"><FaCookieBite/></div>
                    <div className="col-md-2 header-details">email</div>
                    <div className="col-md-1 header-details"><RiAccountCircleLine/> &nbsp;<ImCart/> &nbsp;<ImHeart/></div>
                </div>

            </div>
            <hr></hr>
        </React.Fragment>
    )

}

export default HeaderPage;