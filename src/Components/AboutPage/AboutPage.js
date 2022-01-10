import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import './AboutPage.scss';



const AboutPage = () => {

    return (
        <React.Fragment>
            <div className="about-description" id="about">
                <div className="row text-center">
                    <div className="container">
                        <div className="col-md-12 about-text mt-5">
                            <h1 className="about-title">About Flo's Bites</h1>
                        </div>
                        <div className="col-md-12 about-text mt-5">
                            <p><b>JoyFlo Bites is a home based business that was birthed through daring creativity in the midst of a pandemic in 2020. It all started with a desire to learn how to bake things from scratch that began with over ripe bananas. Can you say banana bread? Whether it’s our fresh baked cookies, cakes or cultural treats, no matter what we make here at JoyFlo bites, the ultimate goal is to leave your tastebuds experiencing “a taste of joy in every bite”.  From day one the support of its customers has been unmatched. Who would have thought a business would be produced by learning a new hobby? And still in the game over a year later, we plan to grow in skill and proficiency in every bite that is produced. Order your next bite and see why customers are raving and coming back for more.</b></p>
                            <button className="about-btn mt-3 mb-5">Read more <FaLongArrowAltRight /></button>
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>

    )

}

export default AboutPage;