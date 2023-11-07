import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer.jsx";

function App() {

  return (
    <div>
      <header><Header /><h2 id="myName">&nbsp; D. Caine Winters &nbsp;</h2></header>

      <main style={{ marginTop: "0px", paddingTop: "50px" }}><Outlet /></main>
      
      <footer style={{ paddingBottom: "0px" }}><Footer /></footer>
    </div>
  );
}

export default App;
