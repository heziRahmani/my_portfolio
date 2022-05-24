import React, { Suspense, useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../generalComponent/animatedLetters/AnimatedLetters";
import Projects from "../projects/Projects";
import "./about.scss";
const About = () => {
  const [letterClass, setletterClass] = useState("text-animate");

  const aboutArrey = "ABOUT ME".split("");
  useEffect(() => {
    setTimeout(() => {
      setletterClass("text-animate-hover");
    }, 3000);
  });
  return (
    <Suspense fallback={<Loader type='pacman' />}>
      <div className='about_container'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              lettersArrey={aboutArrey}
              idx={15}
            />
          </h1>
          <p>Hi, Nice to meet you</p>
          <p>
            A little about me:), I like to code and enjoy bringing ideas to life
            in the browser,
            <br /> From Web Components and UI/UX animations To Back end
            implementation.
            <br /> My tools are VS Code Coffee And Music.
            <br />
          </p>
        </div>
        <div className='about_project_section'>
          <Projects />
        </div>
      </div>
    </Suspense>
  );
};

export default About;
