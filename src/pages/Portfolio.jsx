/* eslint-disable react/jsx-no-target-blank */
// import { useState } from "react";
import imgProj1 from '../assets/projects-proj1.jpg';
import imgProj2 from '../assets/projects-proj2.jpg';
import imgStudyG from '../assets/projects-studyGuide.jpg';
import imgInputG from '../assets/projects-inputGolf.jpg';
import imgMinesweeper from '../assets/projects-minesweeper.jpg';
import imgPrimes from '../assets/projects-primes.jpg';
import imgKorn from '../assets/projects-korn.jpg';

function Portfolio() {
    

    return (
        <>
        <section id="projects"><h1>Projects</h1></section>
        <div id="emphasizedProject"
          style={{ marginTop: '30px' }}>
            <figure className="card codeCard">
              <h2 className="cardHeader">Dynamic website with DB backend</h2>
              <div className="cardBody">
                <p>2nd major group poject in bootcamp:  MySQL DB utilized backend built with libraries such as Handlebars, JQuery, Express, and Sequelize. 
                  <span>*Note: Link will not function after project graded due to Heroku dynos being reverted to $0 plan. </span></p>
              </div>
              <a className="center" href="https://find-it-p2-c5abd3d95f03.herokuapp.com/"
                target="_blank">
                  <img src={imgProj2} alt='Screenshot of FindIt app' className='center'></img>
                </a>
            </figure>
        </div>
        
        <section className="row justifyCenter">
          <div className="cardColumn">
            <figure className="card codeCard">
              <h2 className="cardHeader">Joke Translator</h2>
              <div className="cardBody">
                <p>1st major group poject in bootcamp:  interactive website dependent on two external server-side APIs.  Fetches joke and translates it into Yoda-speak. 
                  <span>*Note: Link will not function after project graded due to Heroku dynos being reverted to $0 plan. </span></p>
              </div>
              <a className="center" href="https://sfrancesny.github.io/Joke-Translator/"
                target="_blank">
                <img src={imgProj1} alt='Screenshot of Joke Translator app' className='center'></img>
                </a>
            </figure>
        </div>
        
          <div className="cardColumn">
            <figure className="card codeCard">
              <h2 className="cardHeader">Study guide</h2>
              <div className="cardBody">
                <p>Studyguide for Full Stack bootcamp -- a simple website.</p>
              </div>
                <a className="center" href="https://elcaine.github.io/prework-study-guide/"
                  target="_blank">
                  <img src={imgStudyG} alt='Screenshot of study guide app' className='center'></img>
              </a>
          </figure>
          </div>
        
         
          <div className="cardColumn">
            <figure className="card codeCard">
              <h2 className="cardHeader">Input Golf</h2>
              <div className="cardBody">
                <p>Quiz-based web game teaching cybersecurity.</p>
              </div>
              <a className="center" href="https://github.com/elcaine/IGcopy/tree/main/Input_Golf-main"
                target="_blank">
                <img src={imgInputG} alt='Screenshot of game UI' className='center'></img>
              </a>
          </figure>
          </div>
        
          <div className="cardColumn">
            <figure className="card codeCard">
              <h2 className="cardHeader">Minesweeper</h2>
              <div className="cardBody">
                <p>Point-&-click remake of the classNameic Microsoft game.</p>
              </div>
              <a className="center" href="https://github.com/elcaine/Minesweeper"
                target="_blank">
                <img src={imgMinesweeper} alt='Screenshot of Minesweeper game' className='center'></img>
              </a>
          </figure>
          </div>
          <div className="cardColumn">
            <figure className="card codeCard">
              <h2 className="cardHeader">Ten digit primes hunt</h2>
              <div className="cardBody">
                <p>Find 10-digit primes from concatenated Fibonacci sequence.</p>
              </div>
              <a className="center" href="https://github.com/elcaine/findTen"
              target="_blank">
              <img src={imgPrimes} alt='Screenshot of code snippet' className='center'></img>
              </a>
          </figure>
          </div>
          <div className="cardColumn">
            <figure className="card codeCard">
              <h2 className="cardHeader">Korn like interface</h2>
              <div className="cardBody">
                <p>Command line shell application attempting to emulate KornShell.</p>
              </div>
              <a className="center" href="https://github.com/elcaine/nutShellProjectRepo"
              target="_blank">
              <img src={imgKorn} alt='Kornshell logo' className='center'></img>
              </a>
          </figure>
          </div>
        </section>
        </>
    );
}

export default Portfolio;
