
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FadeIn from 'react-fade-in';
import flour_logo from '../../Images/joyflo-bites-v1.png';
import swal from 'sweetalert2';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";
import './SlackCommunityPage.scss';



const SlackCommunityPage = () => {
    
    const webHookURL="https://hooks.slack.com/services/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";
    const [isVerified, setVerification] = useState(false);
    const [message, setMessage] = useState('');

  
    // let res =  axios.post(webHookURL, JSON.stringify(data), {
    //     withCredentials: false,
    //     transformRequest: [(data, headers) => {
    //         delete headers.post["Content Type"]

    //         return data;
    //     }]

    // })

    const data ={
        "text": `${message}`
    }

    
    axios.post(webHookURL,JSON.stringify(data))
    .then(res => {
      console.log(res);
      console.log(res.data);
    })


    // if (res === 200) {
    //     swal.fire("SENT!");
    //     setMessage("");
    // } else {
    //     swal.fire("Message Failed!");

    // }

    if(res===200){
        swal.fire("SENT!");
        setMessage("");
    }
    else{
        swal.fire("Message Failed!");

    }

  

    const verifyCallback = () => {
        setVerification(true);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        swal.fire("SENT!");


    }

   // console.log("feedback " + message);

    return (

        <div>

            <FadeIn transitionDuration="1000">
                <div className="container">
                    
                    <div className="row row-centered">
                        <div className="col-md-12">
                            <img src={flour_logo} width="600" height="500" alt="logo" />
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
                                    value={message}
                                    onChange={(e)=> setMessage(e.target.value)}

                                />
                            </Box>
                            <Button variant="dark"
                             onClick={(e)=>handleSubmit(e)}
                            >Submit</Button>
                        </div>
                    </div>
                </div>


            </FadeIn>

        </div>

    )
};
export default SlackCommunityPage;