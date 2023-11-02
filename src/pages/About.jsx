// import { useState } from "react";
import headshot from "../assets/headshot.jpg";

function About() {
    // const [portfolio, setPortfolio] = useState();
    

    return (
        <>
        <div>
            <h1 className="text-3xl font-bold underline">Caine on the journey to now</h1>
        </div>
        
        
    <div>
      <section id="about">
        <img src={headshot} alt="Headshot of Caine Winters"/>
        <h2>About</h2>
        <p>
          I have aleady had a rewarding career in the hospitality industry.  I decided in 2019 that
          I wanted to achieve my long-desired goal of completing my college education, so I returned to shcool.  I earned my 
          Bachelor of Science in December 2022 from the University of Florida with a major in Computer Science.
        </p>  
      </section>
    </div>
        </>
    );
}

export default About;
