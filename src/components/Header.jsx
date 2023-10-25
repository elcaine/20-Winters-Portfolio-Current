import React from "react";
import background from "../assets/background.svg";

const Header = () => {
    return (
      <>
      
    {/* <header>  */}
        <nav className="navbar" style={{ backgroundImage: `url(${background})` }}> 
            <div className="logo"> 
                <a href="/">
                </a>  
            </div> 
            <div className="hamburger-menu"> 
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div> 
            <div className="nav-menu hide"> 
                <a href="#">Home</a> 
                <a href="#">About Me</a> 
                <a href="#">Prortfolio</a>
                <a href="#">Contact</a>
                <a href="#">Resume</a> 
            </div> 
        </nav> 
    {/* </header>  */}
        {/* <div className="topnav">
          <a className="active" href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div> */}
      </>
    )
}

export default Header
