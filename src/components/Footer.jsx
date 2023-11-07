import iconGithub from "../assets/svgGithub.svg"; //	Source: www.github.com
import iconEmail from "../assets/svgEmail.svg"; //	Source: www.svgrepo.com
import iconInsta from "../assets/svgInstagram.svg"; //	Source: www.svgrepo.com
import iconPhone from "../assets/svgPhone.svg"; //	Source: www.seekicon.com/free-icon/
import iconLinkedin from "../assets/svgLinkedin.svg"; //	Source: commons.wikimedia.org/wiki/Main_Page
import iconCv from "../assets/svgCv.svg"; //	Source: www.svgrepo.com
import resumeDanielCaineWinters from "../assets/ResumeDoc.pdf";

// Beginnings taken from: https://www.geeksforgeeks.org/how-to-create-a-simple-responsive-footer-in-react-js/
import {
  Box,
  FooterContainer,
  Row,
  Column,
  FooterLink,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <h1
        style={{
          color: "green",
          textAlign: "center",
        }}
      >
        Connect with Caine
      </h1>
      <FooterContainer>
        <Column>
          <Row
            style={{ justifyItems: "center" }}
          >
            <FooterLink href="tel:4076942540">
              <img src={iconPhone} className="logo" alt="Phone icon" />
            </FooterLink>

            <FooterLink href="https://github.com/elcaine" target="_blank" rel="noreferrer">
              <img src={iconGithub} className="logo" alt="Github icon" />
            </FooterLink>

            <FooterLink href="mailto:caine.winters@outlook.com">
              <img src={iconEmail} className="logo" alt="Email icon" />
            </FooterLink>
          </Row>

          <Row
            style={{ justifyItems: "center" }}
          >
            <FooterLink href={resumeDanielCaineWinters} target="_blank" rel="noreferrer">
              <img src={iconCv} className="logo" alt="Resume icon" />
            </FooterLink>

            <FooterLink href="https://www.linkedin.com/in/caine-winters-8b298520/" target="_blank" rel="noreferrer">
              <img src={iconLinkedin} className="logo" alt="LinkedIn icon" />
            </FooterLink>

            <FooterLink href="https://www.instagram.com/caine314159" target="_blank" rel="noreferrer">
              <img src={iconInsta} className="logo" alt="Instagram icon" />
            </FooterLink>
          </Row>
        </Column>
      </FooterContainer>
    </Box>
  );
};
export default Footer;
