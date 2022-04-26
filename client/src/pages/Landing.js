import React from 'react';

let ReactRotatingText = require('react-rotating-text');


const Landing = () => {


    const meals = ["VEGETARIAN", "PESCETARIAN", "MEATLOVER"]

    const sayings = [
        "After a good dinner one can forgive anybody, even one's own relatives.", 
        "We all eat, and it would be a sad waste of opportunity to eat badly.",
        "Food brings people together on many different levels. It’s nourishment of the soul and body; it’s truly love.",
        ]
    
        return (
            <div className='LandingPage'>
                <div className='intro-center'>
                    <div className='title'><p>BRYSS</p></div>
                    <div className='intro-holder'>
                        <div className="intro col-9">
                            DELICIOUS AND HEALTHY
                            <br/>MEALS FOR <span  className="rotateText" ><ReactRotatingText items={meals}/></span>
                            <br/>FROM THE KITCHEN TO YOUR TABLE
                        </div>
                        <div className="sideCard col-3">
                            <div className='startUp'>
                                <card className="center">
                                    <p><ReactRotatingText items={sayings}/></p>
                                </card>
                                <div className="center">
                                    <button className="SignUp">Sign Up</button>
                                    <p2>or</p2>
                                    <button className="Login">Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Landing;
