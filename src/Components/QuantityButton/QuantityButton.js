
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { PayPalButton } from "react-paypal-button-v2";
import * as emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

import './QuantityButton.scss';

class QuantityButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 1,
      show: true,
      checkout: false,
      modal: this.props.modal,
      total: this.props.price
    };

  }

  handleSubmit = () => {

    this.setState({ modal: true })

    let templateParams = {
      name: this.props.name,
      from_name: this.props.email,
      to_name: 'JoyFLoBites',
      eta: this.props.eta,
      price: this.state.total,
      deliveryAddress: this.props.address,
      phoneNumber: this.props.phone,
      item: this.props.item,
      amount: this.state.clicks - 1
    }

    this.handleVerification(templateParams);

  }
  handleVerification = (templateParams) => {

    emailjs.send(
      "joyflobites",
      "template_scoc1g8",
      templateParams,
      "user_AwR89hPpLp9fVHKarAVvX"
    ).then(function (response) {
      console.log("Message sent to JoyFloBites");
      //alert
      Swal.fire({
        title: `Thank You for your purchase!`,
        text: `Check your E-mail for shipping updates!`,
        icon: "success",
        timer: 5000,
        buttons: { cancel: null }

      });
    }, function (error) {
      Swal.fire({
        title: "Oops!",
        text: "Payment not sent please check user account or select a different form of payment",
        icon: "error",
        timer: 5000,
        buttons: { cancel: null }
      })
      console.log("NO Message sent to JoyFloBites: " + error);
    });
    //close modal

  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
    this.PriceChangeUP();
  }

  ResetItem = () => {
    this.setState({ clicks: 1, total: this.props.price });

  }


  PriceChangeUP = () => {
    this.setState({ total: this.props.price * this.state.clicks });
  }

  PriceChangeDown = () => {
    this.setState({ total: this.state.total / this.state.clicks });

  }

  render() {
    return (

      <div>

        <div className="row">
          <div className="col-md-6">
            <Button variant="outline-dark" className="ml-2 mr-4" onClick={this.IncrementItem}>+</Button>
            <Button variant="outline-dark" onClick={this.ResetItem}>Reset</Button>
          </div>
          <div className="col-md-3">
            {this.state.show ? <h2 className="quantity_number ">{this.state.clicks - 1}</h2> : ''}
          </div>
          <div className="col-md-3">

            <p className="ml-md-4  text-center">Total: ${this.state.total} </p>
          </div>
        </div>

        {this.state.checkout ? (
          <PayPalButton
            amount={this.state.total}
            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
            onSuccess={(details, data) => {
              this.handleSubmit();
              // OPTIONAL: Call your server to save the transaction
              return fetch("/paypal-transaction-complete", {
                method: "post",
                body: JSON.stringify({
                  orderID: data.orderID
                })
              });
            }}
          />
        ) : (

          <div className="container ml-5" id="checkout-btn">
            <Button onClick={() => this.setState({ checkout: true })}
              size="lg" className="mb-5" disabled={!this.props.isEnabled} >
              Please Fill in information</Button>
          </div>

        )}
      </div>
    );
  }

}
export default QuantityButton;