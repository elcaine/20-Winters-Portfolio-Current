// import background from "../assets/background.svg";
// import background from "../assets/glasses.jpg";

import iconGithub from "../assets/svgGithub.svg"				//	Source: www.github.com
import iconEmail from "../assets/svgEmail.svg"					//	Source: www.svgrepo.com
import iconPhone from "../assets/svgPhone.svg"					//	Source: www.seekicon.com/free-icon/
import iconLinkedin from "../assets/svgLinkedin.svg"			//	Source: commons.wikimedia.org/wiki/Main_Page
import iconCv from "../assets/svgCv.svg"						//	Source: www.svgrepo.com
import resumeDanielCaineWinters from '../assets/ResumeDoc.pdf';

// Beginnings taken from: https://www.geeksforgeeks.org/how-to-create-a-simple-responsive-footer-in-react-js/
// import React from "react";
import {
	Box,
	FooterContainer,
	Row,
	Column,
	FooterLink,
	// Heading,
} from "./FooterStyles";



const Footer = () => {
	return (
		// <div /*style={{ backgroundImage: `url(${background})` }}*/>
		<Box>
			<h1
				style={{
					color: "green",
					textAlign: "center",
					marginTop: "10px",
				}}
			>
				Connect with Caine Winters
			</h1>
			<FooterContainer>
				<Row>
					<Column>
						<FooterLink href="tel:4076942540"><img src={iconPhone} className="logo" alt="Phone icon"/></FooterLink>
					</Column>
					<Column>
						<FooterLink href="https://github.com/elcaine" target="_blank"><img src={iconGithub} className="logo" alt="Github icon"/></FooterLink>						
					</Column>
					<Column>
						<FooterLink href="mailto:caine.winters@outlook.com"><img src={iconEmail} className="logo" alt="Email icon"/></FooterLink>
					</Column>
					<Column>
						<FooterLink href={resumeDanielCaineWinters} target="_blank"><img src={iconCv} className="logo" alt="Resume icon"/></FooterLink>
					</Column>
					<Column>
						<FooterLink href="https://www.linkedin.com/in/caine-winters-8b298520/" target="_blank"><img src={iconLinkedin} className="logo" alt="LinkedIn icon"/></FooterLink>
					</Column>
				</Row>
			</FooterContainer>
		</Box>
		// </div>
	);
};
export default Footer;


