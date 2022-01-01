import React from 'react';
import FlourLogo from '../../Images/joyflo-bites-v3.png';
import ReactStars from "react-rating-stars-component";
import Card from 'react-bootstrap/Card';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import './PopularPage.scss';



const PopularPage = () => {

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    return (

        <React.Fragment>
            <div className="popular-products" id="about">
                <div className="row text-center">
                    <div className="container">
                        <div className="col-md-12 about-text mt-5">
                            <h1 className="pop-title">Flo's Favs</h1>
                        </div>
                        <div className="col-md-12 mt-5 mb-5">
                            <div className="row ml-4" >
                                <div className="col-lg-4 card-col">
                                    <Card className="pop-card" >
                                        <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/joyflobites.appspot.com/o/Cookies%2Ffav1.jpg?alt=media&token=8455b77d-38f0-43fb-9400-6dc6fd54321e" />
                                        <Card.Body>
                                            <Card.Title>Chocolate Chip Cookies</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>


                                <div className="col-lg-4 card-col">
                                    <Card className="pop-card" >
                                        <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/joyflobites.appspot.com/o/Cultural%2Fmeatpies1.png?alt=media&token=d3ac5f1b-eb94-4310-b653-744829198395" />
                                        <Card.Body>
                                            <Card.Title>Nigerian Meat pies</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>



                                <div className="col-lg-4 card-col">
                                    <Card className="pop-card">
                                        <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/joyflobites.appspot.com/o/Cakes%2Ffav2.png?alt=media&token=84ddbff4-e002-4888-870a-befb7d59d6db" />
                                        <Card.Body>
                                            <Card.Title>Carrot Cake</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>

                        </div>




                    </div>
                </div>
            </div>
        </React.Fragment>

    )

}

export default PopularPage;