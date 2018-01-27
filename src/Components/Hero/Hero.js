import React from 'react';
import logo from '../../imgs/Watermark.png';

const Hero = () => {
    return (
        <div className="jumbotron hero">
            <img src={logo} className="App-logo center" alt="logo" />
            <h3 className="hero-sub-title">Chat App</h3>
        </div>
    )
}

export default Hero