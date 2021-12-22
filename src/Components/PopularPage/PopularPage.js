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
                                    <ReactStars
                                        count={5}
                                        onChange={ratingChanged}
                                        size={50}
                                        
                                    />
                                </Card.Body>
                            </Card>
                                 </div>


                                 <div className="col-lg-4 card-col">
                                 <Card className="pop-card" >
                                <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/joyflobites.appspot.com/o/Cultural%2Fmeatpies1.jpg?alt=media&token=9052fe19-b18b-4c02-8764-418bcb7eb79c" />
                                <Card.Body>
                                    <Card.Title>Nigerian Meat pies</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <ReactStars
                                        className="stars"
                                        count={5}
                                        onChange={ratingChanged}
                                        size={50}
                                    />
                                </Card.Body>
                            </Card>
                                 </div>



                                 <div className="col-lg-4 card-col">
                                 <Card className="pop-card">
                                <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/joyflobites.appspot.com/o/Cakes%2Ffav2.jpg?alt=media&token=378855e7-b711-40e7-b7f8-728c7dc991a9" />
                                <Card.Body>
                                    <Card.Title>Carrot Cake</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <ReactStars
                                        count={5}
                                         onChange={ratingChanged}
                                        size={50}
                                    />
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