import { Link, useLocation } from 'react-router-dom';
// import background from "../assets/background.svg";
import background from "../assets/glasses.jpg";

function Header() {
    const currentPage = useLocation().pathname;

    return (
      <ul className="nav nav-tabs" style={{ backgroundImage: `url(${background})` }}>
        <li className="nav-item">
          <Link
            to="/"
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/About"
            className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Portfolio"
            className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Contact"
            className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </Link>
        </li>
      </ul>
    );
  }
  
  export default Header;




























// import {
// 	Box,
// 	FooterContainer,
// 	Row,
// 	Column,
// 	FooterLink,
// 	Heading,
// } from "../pages/FooterStyles";

// const Header = () => {
//     return (
//       <>
      
// <Box style={{ backgroundImage: `url(${background})` }}>
//     {/* <header>  */}
//         <nav className="navbar" style={{ backgroundImage: `url(${background})` }}> 
//             <div className="logo"> 
//                 <a href="/">
//                 </a>  
//             </div> 
//             <div className="hamburger-menu"> 
//                 <span className="line"></span>
//                 <span className="line"></span>
//                 <span className="line"></span>
//             </div> 
//             <div className="nav-menu hide"> 
//                 <a href="#">Home</a> 
//                 <a href="#">About Me</a> 
//                 <a href="#">Prortfolio</a>
//                 <a href="#">Contact</a>
//                 <a href="#">Resume</a> 
//             </div> 
//         </nav> 
//     {/* </header>  */}
//         {/* <div className="topnav">
//           <a className="active" href="#home">Home</a>
//           <a href="#news">News</a>
//           <a href="#contact">Contact</a>
//           <a href="#about">About</a>
//         </div> */}
// </Box>
//       </>
//     )
// }

// export default Header




