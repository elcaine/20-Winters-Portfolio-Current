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
      <main className='mx-3'><Outlet /></main>
      <footer><Footer /></footer>
    </>
  )
}

export default App
