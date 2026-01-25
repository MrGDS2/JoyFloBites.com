/**
 * This class holds all function for the orderModule
 *
 * @author MrGDS2
 * @version 1.1.26.0
 * 
 * date: 2020, 2026
 * 
 * title   flag   date    name     description
 * _____   _____  _____   _____     ___________
 * 26updte 00     1/24/26  GDS:      updated image display for mobile displays
 */

import React from 'react';
import { useHistory } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LikeButton from '../LikeButton/LikeButton';
import './ItemPurchase.scss';
import OrderModule from '../OrderModule/OrderModule';


const ItemPurchase = () => {

  let history = useHistory();
   
    return (
        <React.Fragment>
 <div className="container">
            <div className="row mt-5 pb-5">
              <div className="col-md-6 item-image" id="item-image">
               <img  className="item-image" width="600px" height="600px" src={history.location.state.img} alt="main-img" />
              </div>
              <div className="col-md-6">
               <div className="container item-info  ml-5 mt-5 text-center" id="item-info">
                   <div className="row mb-5 ">
                       <div className="col-md-12">
                         <h1 className="mt-5 item-title">JOYFLO BITES ™ {history.location.state.name}  </h1>
                         <LikeButton name={history.location.state.name}/>
                           </div> 
                       </div>
                       <h3 className="mt-5 mb-3 item-title">Ingredients:</h3>
                       <div className="row mb-5">
                       
                      <div className="col-md-12 item-ingredients">
                         <ol>{history.location.state.ingredients}</ol>
                          </div> 
                      </div>
            
                         <div className="row mt-5 ">
                               <div className="col-md-12 mb-5">
                           {/* <button className="order-btn">Order Today</button> */}
                          <div className="col-md-6 item-image" id="mini-item-image">
                          <img  className="item-image" width="300px" height="300px"
                           src={history.location.state.img} alt="main-img" />
                          </div>
                           <OrderModule price={history.location.state.price} isCookie={history.location.state.isCookie}/>
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