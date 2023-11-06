import headshot from "../assets/headshot.jpg";
import imgGlasses from "../assets/glasses.jpg";

function About() {

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">
          Caine on the journey to now
        </h1>
      </div>

      <div>
        <section id="about">
          <img src={headshot} alt="Headshot of Caine Winters" />
          <h2>About Me</h2>
          <p>
            I have already had a rewarding career in the hospitality industry. I
            decided in 2019 that I wanted to achieve my long-desired goal of
            completing my college education, so I returned to school. I earned
            my Bachelor of Science in December 2022 from the University of
            Florida with a major in Computer Science. I am currently completing
            a Full Stack - MERN coding bootcamp at UNC-Chapel Hill (completion
            expected mid November 2023). Below is something I painted that
            handily filled some space.
          </p>
        </section>
      </div>

      <div>
      <img src={imgGlasses} alt="Painting of glasses"/>
      </div>
    </>
  );
}

export default About;
