// import { useState } from 'react';
import './App.css'
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
// import About from './pages/About.jsx';
import Footer from './components/Footer.jsx';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <header className='headers'><Header /></header>
      
      {/* <div className='bodys'><About /></div> */}
      <main className='mx-3'><Outlet /></main>

      <div className='footers'><Footer /></div>
    </>
  )
}

export default App
