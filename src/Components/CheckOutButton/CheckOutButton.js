
import React, { useState } from 'react';
import { Button, Label } from 'reactstrap';
import * as emailjs from 'emailjs-com';
import QuantityButton from '../QuantityButton/QuantityButton';

const CheckOutButton = (props) => {
   
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    
    const [modal, setModal] = useState(false);
    
    const isEnabled = props.name.length > 0 && props.isVerified==true;
    var emailSent = false;

 
    const handleSubmit = () => {
        setModal(props.modal);

        let templateParams = {
            name: props.name,
            // from_name: email,
            to_name: 'JoyFLoBites',
            eta: props.eta,
            price: props.price,
            deliveryAddress: props.address,
            phoneNumber: props.phone,
         }

        handleVerification(templateParams);

    }


    const handleVerification = (templateParams) => {

        if (props.isVerified) {
            emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_ORDER_TEMPLATE,
                templateParams,
                process.env.REACT_APP_USER_ID_EMAILJS
            ).then(function (response) {
                console.log("Message sent to JoyFloBites");
               //alert
                emailSent = true;
            }, function (error) {
                console.log("NO Message sent to JoyFloBites: " + error);
            });
            clearForm();
        }
    }
    const clearForm = () => {
        // setFullName('');
        // setEmail('');
    }


    return (

        <React.Fragment>
    
    <Label for="email" className="d-block text-left control-label">How many would you like?</Label>
        <QuantityButton price={props.price} handleSubmit={handleSubmit} emailSent={emailSent} isEnabled={isEnabled}/>

        </React.Fragment>
    )

}

export default CheckOutButton;