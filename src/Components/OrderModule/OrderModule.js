import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import Calendar from 'react-calendar';
import PhoneInput from 'react-phone-number-input';
import ReCAPTCHA from "react-google-recaptcha";
import './OrderModule.scss';
import 'react-phone-number-input/style.css';
import 'react-calendar/dist/Calendar.css';
import QuantityButton from '../QuantityButton/QuantityButton';
import CheckOutButton from '../CheckOutButton/CheckOutButton';


const OrderModule = (props) => {

    const [modal, setModal] = useState(false);
    const [isVerified, setVerification] = useState(false);
    const [date, onDateChange] = useState(new Date());

console.log("date: " + props.price)

    const [fullName, setFullName] = useState('');
    const [deliveryAddress, setDeliveryAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [eta, setETA] = useState('');
    
   

    const toggle = () => setModal(!modal);

    const verifyCallback = () => {
        setVerification(true);
    }
  
    return (
        <div>
        <button className="order-btn" onClick={toggle}>Order Today</button>
            <Modal isOpen={modal} toggle={toggle}>
                <div className="modal-head-order">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" onClick={() => setModal(!modal)} className="x-btn">&times;</span>
                    </button>
                    <ModalHeader className="bhm-primary text-white">Order Form</ModalHeader>
                </div>
                <ModalBody className="font-weight-bold">
                    
                    <Form>
                        <FormGroup className="form-group required">
                            <Label for="receipient name" className="d-block text-left control-label">Full Name</Label>
                            <Input type="text" name="fullName" value={fullName} onChange={e => setFullName(e.target.value)} placeholder="Your name" title="Please put your name for us" required />
                            <FormFeedback>You will not be able to see this</FormFeedback>
                        </FormGroup>

                        <FormGroup className="form-group required">
                            <Label for="receipient name" className="d-block text-left control-label">Address</Label>
                            <Input type="text" name="address" value={deliveryAddress} onChange={e => setDeliveryAddress(e.target.value)} placeholder="Your Address" title="Please put your address for us" required />
                            
                        </FormGroup>

                        <FormGroup className="form-group required">
                            <Label for="receipient name" className="d-block text-left control-label">Email</Label>
                            <Input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your E-mail" title="Please put your name for us" required />
                            
                        </FormGroup>

                        <FormGroup >
                     <Label for="phone" className="d-block text-left">Phone</Label>
                     <PhoneInput placeholder="Example 914 208 9937" defaultCountry="US" value={phoneNumber} onChange={setPhoneNumber}/>
                 </FormGroup>



                 


                  <FormGroup>
     
                  <Calendar
                    onChange={onDateChange}
                    value={date}
                    tileDisabled={({activeStartDate, date, view }) => date.getMonth()===11
                     &&
                    date.getDate() <= 5}
                    className="calendar"
                    required/>
                    </FormGroup>
                        <ReCAPTCHA className="mb-4 d-flex justify-content-center"
                            sitekey={`6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI`}
                            onChange={verifyCallback}
                        />

                     {/* PayPalButton */}
                     
                     <CheckOutButton 
                     name={fullName} address={deliveryAddress}
                     toggle={toggle} phone={phoneNumber}
                     isVerified={isVerified} eta={eta}
                     modal={modal}
                     price={props.price}
                     />

                    </Form>
                </ModalBody>
                <ModalFooter>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default OrderModule;