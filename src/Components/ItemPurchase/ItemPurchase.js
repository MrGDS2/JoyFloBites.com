import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { RiArrowDropRightLine } from 'react-icons/ri';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FloIcon from '../../Images/flo_cookies.jpg';
import { FaCcPaypal } from 'react-icons/fa';
import ProductCard from "../MuiCard/MuiCard.js";

import './ItemPurchase.scss';

const ItemPurchase = () => {

  let history = useHistory();

  console.log("History==>" + history.location.state)
    return (
        <React.Fragment>
 <div className="container">
            <div className="row mt-5 pb-5">
              <div className="col-md-6 ">
                <img src={FloIcon} id="item-img" height="600" alt="main-img" />
                
              </div>
              <div className="col-6">
               <div className="container item-info  ml-5 mt-5 text-center">
                   <div className="row mb-5 ">
                       <div className="col-md-12">
                         <h1 className="mt-5 item-title">JOYFLO BITES ™ {history.location.state}  </h1>
                           </div> 
                       </div>
                       <div className="row mb-5">
                      <div className="col-md-12 item-ingredients">
                         Chocolate chips, nuts
                          </div> 
                      </div>
                    <div className="row mt-5">
                               <div className="col-md-12">
                               <Button variant="outline-light">8 pk</Button>
                                <Button variant="outline-light">12 pk</Button>
                                <Button variant="outline-light">32 pk</Button>
                                   </div>
                               </div>
                         <div className="row mt-5 ">
                               <div className="col-md-12 mb-5">
                           <button className="order-btn">Order Today</button>
                               </div>
                               </div>
               </div>
              </div>
            </div>

          </div>
          
        </React.Fragment>
        )

}

export default ItemPurchase;