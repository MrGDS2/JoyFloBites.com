import React from 'react';
import { Player } from 'video-react';
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
                            <p><b>JoyFloBites is a black female owned business, that seeks to spread a little joy in every bite. It was birthed through a desire to learn something new in the midst of being quarantined in a pandemic in 2020. So we chose to learn to bake from scratch and it started with having some over ripe bananas on deck. Can you say banana bread? Whether it`s our fresh baked cookies, cakes or cultural bites and treats, no matter what we make here at JoyFloBites; the ultimate goal is to leave your tastebuds experiencing “a taste of joy in every bite”.  From day one, the support of its customers has been unmatched. Who would have thought a business would be produced by learning a new hobby? Still till in the game over a year later, we plan to grow in skill and proficiency with every bite that is produced. Order your next bite and see why customers are raving and coming back for more.</b></p>

                            <Player className="mb-5">
                             <source src="https://firebasestorage.googleapis.com/v0/b/joyflobites.appspot.com/o/Videos%2FJoyFloBites_Trailer2.mp4?alt=media&token=8fa7a4df-c514-4a8e-b10e-c182286377ee" />
                            </Player>
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>

    )

}

export default AboutPage;