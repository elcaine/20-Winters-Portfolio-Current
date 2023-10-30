// import background from "../assets/background.svg";
import background from "../assets/glasses.jpg";
import resumeDanielCaineWinters from '../assets/Daniel Caine Winters Resume.pdf';

// Beginnings taken from: https://www.geeksforgeeks.org/how-to-create-a-simple-responsive-footer-in-react-js/
import React from "react";
import {
	Box,
	FooterContainer,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./FooterStyles";

const Footer = () => {
	return (
		<Box style={{ backgroundImage: `url(${background})` }}>
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
						<FooterLink href="tel:4076942540">(407) 694-2540</FooterLink>
					</Column>
					<Column>
						<FooterLink href="https://github.com/elcaine" target="_blank">Github</FooterLink>
					</Column>
					<Column>
						<FooterLink href="mailto:caine.winters@outlook.com">Email</FooterLink>
					</Column>
					<Column>
						<FooterLink href={resumeDanielCaineWinters} target="_blank">Resume</FooterLink>
					</Column>
				</Row>
			</FooterContainer>
		</Box>
	);
};
export default Footer;
