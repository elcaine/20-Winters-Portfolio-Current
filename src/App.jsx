// import { useState } from 'react';
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
// import About from './pages/About.jsx';
import Footer from "./components/Footer.jsx";
// import backgrdound from "./assets/glasses.jpg";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div style={{ overflowX: "hidden" }}>
      <header><Header /><h2 id="myName">&nbsp; D. Caine Winters &nbsp;</h2></header>

      <main ><Outlet /></main>
      
      <footer><Footer /></footer>
    </div>
  );
}

export default App;
