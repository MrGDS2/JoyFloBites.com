
import React, { useState } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FadeIn from 'react-fade-in';
import flour_logo from '../../Images/joyflo-bites-v1.png';
import swal from 'sweetalert2';
import ReCAPTCHA from "react-google-recaptcha";
import './SlackCommunityPage.scss';



const SlackCommunityPage = () => {

    const [isVerified, setVerification] = useState(false);


    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [service, setService] = useState('');
    const [message, setMessage] = useState('');


    const isEnabled = email.length > 0 && fullName.length > 0 &&
        phoneNumber.length > 0 && service.length > 0 && message.length > 0 && isVerified;

    const verifyCallback = () => {
        setVerification(true);
    }


    const handleSubmit = () => {



    }


    return (

        <div>

            <FadeIn transitionDuration="1000">
                <div className="container">
                    
                    <div className="row row-centered">
                        <div className="col-md-12">
                            <img src={flour_logo} width="600" height="500" />
                            <h1 className="feed-text mt-5">Your FeedBack Is Important!</h1>
                        </div>

                    
                    </div>

                    <div className="row row-centered">

                        <div className="col-md-12">
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '700px' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Please Enter Feedback"
                                    multiline
                                    rows={4}
                                    placeholder="Enter Text Here"
                                    variant="filled"
                                />
                            </Box>
                            <Button variant="dark">Submit</Button>
                        </div>
                    </div>
                </div>


            </FadeIn>

        </div>

    )
};
export default SlackCommunityPage;