import { Link, useLocation } from "react-router-dom";

function Header() {
  const currentPage = useLocation().pathname;

  return (
    <ul
      className="nav nav-tabs"
    >
      <li className="nav-item">
        <Link
          to="/About"
          className={currentPage === "/About" ? "nav-link active" : "nav-link"}
          style={{ color: "green" }}
        >
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          className={currentPage === "/Portfolio" ? "nav-link active" : "nav-link"}
          style={{ color: "green" }}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={currentPage === "/Contact" ? "nav-link active" : "nav-link"}
          style={{ color: "green" }}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          className={currentPage === "/Resume" ? "nav-link active" : "nav-link"}
          style={{ color: "green" }}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default Header;
