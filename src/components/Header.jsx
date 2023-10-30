import React from "react";
// import background from "../assets/background.svg";
import background from "../assets/glasses.jpg";
import {
	Box,
	FooterContainer,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./FooterStyles";

const Header = () => {
    return (
      <>
      
<Box style={{ backgroundImage: `url(${background})` }}>
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
</Box>
      </>
    )
}

export default Header
