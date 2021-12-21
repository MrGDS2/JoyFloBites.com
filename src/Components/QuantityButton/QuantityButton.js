
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import {  ImCart } from "react-icons/im";
import { PayPalButton } from "react-paypal-button-v2";
import swal from 'sweetalert2';

class QuantityButton extends Component {
    constructor(props) {
      super(props);
      this.state = {
        clicks:1,
        show:true,
        checkout: false,
        total: this.props.price
      };

    }
// this.props.history.push({pathname:"/Order", state: {amount:this.state.clicks}}); 
    IncrementItem = () => {
      this.setState({ clicks: this.state.clicks + 1 });
      this.PriceChangeUP();
      }

    ResetItem = () => {
        this.setState({ clicks: 1 , total:this.props.price });
        
      }


      PriceChangeUP=()=>{
        this.setState({total: this.state.total*this.state.clicks});
      }

      PriceChangeDown=()=>{
        this.setState({total: this.state.total/this.state.clicks});
      }
   
      render() {
        return (

          <div>

            <div  className="row"> 
                <div className="col-md-6">
                <Button variant="outline-dark" className="ml-2 mr-4" onClick={this.IncrementItem}>+</Button>
            <Button variant="outline-dark" onClick={this.ResetItem}>Reset</Button>
             </div>
            <div className="col-md-6"> 
            { this.state.show ? <h2 className="quantity_number">{ this.state.clicks -1 }</h2> : '' }</div>
             <p className="ml-md-4">Checkout Total: ${this.state.total} </p>
             <div className="paypal-btn">
                            {this.state.checkout ? (
                                <PayPalButton
                                    amount={this.state.total}
                                
                                    // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                                    onSuccess={(details, data) => {
                                        //send email to user and business
                                        this.props.handleSubmit()
                                        if(!this.props.emailSent) {
                                           //swal alert
                                            console.log("NO Email sent!");
                                         }else console.log("Email sent!");
                                        // OPTIONAL: Call your server to save the transaction
                                        return fetch("/paypal-transaction-complete", {
                                            method: "post",
                                            body: JSON.stringify({
                                                orderID: data.orderID
                                            })
                                        });

                                    }}
                                    catchError={(err) => {
                                        console.log("FAILED: " + err);
                                   //swal alert
                                    }}
                                />
                            ) : (

                                    <div className="container ml-5 mt-5" id="checkout-btn">
                                        <Button onClick={() => {
                                            this.state.checkout=true
                                        }} size="lg" className="mb-5" disabled={!this.props.isEnabled} >
                                            Checkout <ImCart /></Button>
                                    </div>

                                )}

                        </div>
            </div>
           
          </div>
        );
      }

  }
  export default QuantityButton;