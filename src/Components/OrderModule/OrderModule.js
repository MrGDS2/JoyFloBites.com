import React, { useState } from 'react';
import * as emailjs from 'emailjs-com';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'
import { ImPaypal, ImCart } from "react-icons/im";
import firebase from '../../Firebase';
import { PayPalButton } from "react-paypal-button-v2";
import swal from 'sweetalert2';
import ReCAPTCHA from "react-google-recaptcha";
import './OrderModule.scss';


const OrderModule = (props) => {

    
    const [modal, setModal] = useState(false);
    const [isVerified, setVerification] = useState(false);
    const [checkout, setCheckOut] = useState(false);


    const [fullName, setFullName] = useState('');
    const [deliveryAddress, setdeliveryAddress] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');
    const [eta, setETA] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    const toggle = () => setModal(!modal);

    // if (sizeOfPrint !== '') {
    //     firebase.database().ref('Sizes').child(sizeOfPrint).once("value", snapshot => {
    //         setPrice(snapshot.val());
    //         console.log("Size: " + snapshot.val());
    //     });
    // }



    // const isEnabled = email.length > 0 && isVerified;
    let emailSent = false;
    const verifyCallback = () => {
        setVerification(true);
    }
    const handleSubmit = () => {
        setModal(!modal);

        let templateParams = {
            name: fullName,
            // from_name: email,
            to_name: 'JoyFLoBites',
            eta: eta,
            price: price,
            deliveryAddress: deliveryAddress,
            phoneNumber: phoneNumber,
            item: props.name,
            img: props.image
        }

        handleVerification(templateParams);

    }


    const handleVerification = (templateParams) => {

        if (isVerified) {
            emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_ORDER_TEMPLATE,
                templateParams,
                process.env.REACT_APP_USER_ID_EMAILJS
            ).then(function (response) {
                console.log("Message sent to Madgiraffe");
               //alert
                emailSent = true;
            }, function (error) {
                console.log("NO Message sent to Madgiraffe: " + error);
            });
            clearForm();
        }
    }
    const clearForm = () => {
        // setFullName('');
        // setEmail('');
    }

    return (
        <div>
        <button className="order-btn" onClick={toggle}>Order Today</button>
            <Modal isOpen={modal} toggle={toggle}>
                <div className="modal-head-order">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" onClick={() => setModal(!modal)} className="x-btn">&times;</span>
                    </button>
                    <ModalHeader className="bhm-primary text-white">Order Form: {props.name}</ModalHeader>
                </div>
                <ModalBody className="font-weight-bold">
                    <Form>
                        <FormGroup className="form-group required">
                            <Label for="receipient name" className="d-block text-left control-label">Full Name</Label>
                            <Input type="text" name="fullName" value={fullName} onChange={e => setFullName(e.target.value)} placeholder="Your name" title="Please put your name for us" required />
                            <FormFeedback>You will not be able to see this</FormFeedback>
                        </FormGroup>
                        {/* <ReCAPTCHA className="mb-4 d-flex justify-content-center"
                            sitekey={process.env.REACT_APP_SITE_KEY}
                            onChange={verifyCallback}
                        /> */}
                        <p className="checkout-txt">Checkout Total: ${price} </p>
                        {/* <div className="paypal-btn">
                            {checkout ? (
                                <PayPalButton
                                    amount={price}
                                
                                    // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                                    onSuccess={(details, data) => {
                                        //send email to user and business
                                        handleSubmit();
                                        if(!emailSent) {
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

                                    <div className="container " id="checkout-btn">
                                        <Button onClick={() => {
                                            //setCheckOut(true);
                                        }} size="lg" className="mb-5" disabled={!isEnabled} >
                                            Checkout <ImCart /></Button>
                                    </div>

                                )}

                        </div> */}
                    </Form>
                </ModalBody>
                <ModalFooter>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default OrderModule;