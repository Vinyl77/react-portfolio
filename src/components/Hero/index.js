import React from 'react';
import Navigation from '../Nav/index';
import "./style.css"

const Hero = () => {
    return(
    
        <div className="hero-image">
            <Navigation/>
            <div className="hero-text">
                <h1 className="hero-title">Richard Yvarra</h1>
                <p>Promising fullstack web developer based in New Haven, Connecticut.</p>
               
            </div>
        </div>
    )
}

export default Hero;