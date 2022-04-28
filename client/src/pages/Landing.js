import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import farfar from '../assets/images/Badges/farfar.png'
import gwBestMealAward from '../assets/images/Badges/gwBestMealAward.png'
import neverland from '../assets/images/Badges/neverland.png'

let ReactRotatingText = require('react-rotating-text');


=======
let ReactRotatingText = require('react-rotating-text');

>>>>>>> aba9a9c3551147f2b316545ff2d5704b2b1db832
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
<<<<<<< HEAD
                    <div className='intro-holder'>
                        <div className="intro col-8">
                            <div className='title'>
                                <p>BRYSS</p>
                            </div>
                            <div className="intro-text">
                                DELICIOUS AND HEALTHY
                                <br/>MEALS FOR <span  className="rotateText" ><ReactRotatingText items={meals}/></span>
                                <br/>FROM THE KITCHEN TO YOUR TABLE
                            </div>
                            <div className='inspiration'>
                                <p className='quote col-12'>"We all eat, and it would be a sad waste of opportunity to eat badly."<br/>by ANNE THOMAS </p>
                                <p className='promise'>
                                    We only treats the best and freshest ingredients with carefully selected excellent chefs.<br/> Start your weekly meal plan now!
                                </p>

                            </div>
                        </div>
                        <div className="sideCard col-4">
                            <div className='startUp'>
                                <div className="center">
                                    <button className="SignUp"><Link to="/signup">Sign Up</Link></button>
=======
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
                                    <button className="SignUp"><Link to="/signup">Sign Up</Link></button>
                                    <p2>or</p2>
>>>>>>> aba9a9c3551147f2b316545ff2d5704b2b1db832
                                    <button className="Login"><Link to="/login">Login</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
<<<<<<< HEAD
                    <div className="badge-holder flex-row justify-space-around align-center">
                                <div className='col-3'>
                                    <img className='badge' src={farfar} alt="Farfar badge"/>
                                </div>
                                <div className='col-3'>
                                    <img className='badge' src={gwBestMealAward} alt="Farfar badge"/>
                                </div>
                                <div className='col-3'>
                                    <img className='badge' src={neverland} alt="Farfar badge"/>
                                </div>
                    </div>
=======
>>>>>>> aba9a9c3551147f2b316545ff2d5704b2b1db832
                </div>
            </div>
        )
}

export default Landing;
