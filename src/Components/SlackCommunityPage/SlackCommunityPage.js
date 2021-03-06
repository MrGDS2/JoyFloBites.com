
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FadeIn from 'react-fade-in';
import flour_logo from '../../Images/joyflo-bites-v1.png';
import swal from 'sweetalert2';
import axios from 'axios';
import firebase from '../../Firebase';
import './SlackCommunityPage.scss';



const SlackCommunityPage = () => {


    const [message, setMessage] = useState('');
    const [webHookURL,setWebHook]= useState('');

    const data = {
        "text": `${message}`
    }

    useEffect(() => {
    firebase.database().ref("webHook").once("value", snapshot => {
        setWebHook(snapshot.val());
    });


    }, [])



    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(webHookURL, JSON.stringify(data))
            .then(res => {
                console.log(res);
                console.log("data" + res.data);
                if (res.status === 200) {
                    swal.fire({
                        title: `Thank You!`,
                        text: `We've received your feedback!`,
                        icon: "success",
                        timer: 5000,
                        showCancelButton: false,
                        showConfirmButton: false
                    });

                    setMessage("");
                }
                else {
                    swal.fire({
                        title: `Message Failure`,
                        text: `An error has occurred please contact JoyFloBites@gmail.com`,
                        icon: "error",
                        timer: 5000,
                        showCancelButton: false,
                        showConfirmButton: false
                    });
                }
            })

    }

    return (

        <div>

            <FadeIn transitionDuration="1000">
                <div className="container">

                    <div className="row row-centered">
                        <div className="col-md-12">
                            <div className='container'>
                            <img src={flour_logo} className="flo-image" alt="logo" />
                            </div>
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
                                    onChange={(e) => setMessage(e.target.value)}

                                />
                            </Box>
                            <Button variant="dark"
                                className="mb-5"
                                onClick={(e) => handleSubmit(e)}
                            >Submit</Button>
                        </div>
                    </div>
                </div>


            </FadeIn>

        </div>

    )
};
export default SlackCommunityPage;