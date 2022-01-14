import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import Calendar from 'react-calendar';
import PhoneInput from 'react-phone-number-input';
import Recaptcha from 'react-google-recaptcha';
import firebase from '../../Firebase';
import CheckOutButton from '../CheckOutButton/CheckOutButton';
import 'react-phone-number-input/style.css';
import 'react-calendar/dist/Calendar.css';
import './OrderModule.scss';

const OrderModule = (props) => {

    const [modal, setModal] = useState(false);
    const [isVerified, setVerification] = useState(false);
    const [date, onDateChange] = useState(new Date());

    const [fullName, setFullName] = useState('');
    const [deliveryAddress, setDeliveryAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [cookieSize, setCookieSize] = useState(12);
    const [cookiePrice, setCookiePrice] = useState('');

    let history = useHistory();
    let itemName = history.location.state.name;
    let isCookie = history.location.state.isCookie;

    const toggle = () => setModal(!modal);

    useEffect(() => {

        firebase.database().ref('Cookie Amount')
            .once("value", snapshot => {
                setCookiePrice(snapshot.child(cookieSize).val());

            })

    });



    const verifyCallback = () => {
        setVerification(true);
    }


    const setModalRefresh = () => {
        setModal(!modal);
        clearForm();
    }

    const clearForm = () => {
        setFullName('');
        setEmail('');
        setPhoneNumber('');
        setDeliveryAddress('');
    }


    return (
        <div>
            <button className="order-btn" onClick={toggle}>Order Today</button>
            <Modal isOpen={modal} toggle={toggle}>
                <div className="modal-head-order">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" onClick={() => setModalRefresh()} className="x-btn">&times;</span>
                    </button>
                    <ModalHeader className="bhm-primary text-white">Please Fill out Order for:  {itemName}</ModalHeader>
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
                            <PhoneInput placeholder="Example 914 208 9937" defaultCountry="US" value={phoneNumber} onChange={setPhoneNumber} />
                        </FormGroup>

                        <FormGroup className="form-group required">

                            <Label for="phone" className="d-block text-left">Cookie Amount</Label>
                            <Input type="select" name="amount" value={cookieSize} onChange={e => setCookieSize(e.target.value)}
                                title="Set cookie amount" disabled={!isCookie}>
                                <option disabled={true} > -- Select Cookie Amount -- </option>
                                <option>12</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>

                            <Calendar
                                onChange={onDateChange}
                                value={date}
                                className="calendar"
                                required />
                        </FormGroup>



                         <Recaptcha className="mb-4 d-flex justify-content-center"
                            sitekey={process.env.REACT_APP_SITE_KEY}
                            onChange={verifyCallback}
                            />

    
                        {/* PayPalButton */}

                        <CheckOutButton
                            name={fullName} address={deliveryAddress}
                            toggle={toggle} phone={phoneNumber}
                            email={email}
                            isVerified={isVerified} eta={date}
                            item={itemName}
                            modal={modal}
                            price={isCookie ? cookiePrice : props.price}
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