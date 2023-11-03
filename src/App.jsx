// import { useState } from 'react';
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
// import About from './pages/About.jsx';
import Footer from "./components/Footer.jsx";
// import background from "./assets/glasses.jpg";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <header className="headers"><Header />
        <h2
          style={{
            float: "right",
            marginTop: "-35px",
            color: "green",
            textShadow: "1px 1px 10px gold",
          }}
        >
          D. Caine Winters
        </h2>
      </header>
      <main className="mx-3"><Outlet /></main>
      <footer><Footer /></footer>
    </>
  );
}

export default App;
