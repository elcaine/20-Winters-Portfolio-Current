import React from "react";
// import background from "../assets/background.svg";
import background from "../assets/glasses.jpg";

const Footer = () => {
    return (
      <>
      <footer>
        <ul id="contact">
            <li><a href="tel:4076942540">(407)694-2540</a></li>
            <li><a href="https://github.com/elcaine" target="_blank">Github Profile</a></li>
            <li><a href="mailto:caine.winters@outlook.com">Caine.Winters@outlook.com</a></li>
            <li><a href="./assets/docs/Daniel Caine Winters Resume.pdf" target="_blank">Resume</a></li>
        </ul>
        <h3>Made with <span role="img" aria-label="heart">❤️</span> and CSS</h3>
      </footer>
      </>
    )
}

export default Footer
