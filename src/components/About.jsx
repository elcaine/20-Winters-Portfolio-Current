// import { useState } from "react";
import headshot from "../assets/headshot.jpg";

function About() {
    // const [portfolio, setPortfolio] = useState();
    

    return (
        <>
        <div>
            <h1 className="text-3xl font-bold underline">The mighty migthy $$$ PORTFOLIO</h1>
        </div>
        
        
    <div>
      <section id="about">
        <img src={headshot} alt="Headshot of Caine Winters"/>
        <h2>About</h2>
        <p>
          I have aleady had a long and rewarding career in the hospitality industry.  I decided in 2019 that
          I wanted to achieve my long-desired goal of completing my college education.  I earned my 
          Bachelor of Science in December 2022 from the University of Florida with a major in Computer Science.
        </p>  
      </section>
    </div>
        </>
    );
}

export default About;

// TODO:  See about React <img /> approach (might not be as typed here)
// TODO IDEA!!!!! ==> uses Glasses painting!!!!