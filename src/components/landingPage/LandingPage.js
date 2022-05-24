import React, { lazy, Suspense, useEffect, useState } from "react";
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import LogoH from "../../assets/images/letter_H.png";
import Cube3D from "./cube/Cube3D";
import "./landingPage.scss";
const AnimatedLetters = lazy(() =>
  import("../generalComponent/animatedLetters/AnimatedLetters")
);
const LandingPage = () => {
  const [letterClass, setletterClass] = useState("text-animate");
  const nameArrey = "ezi".split("");
  const jobArrey = "A  Web  Developer".split(" ");
  useEffect(() => {
    setTimeout(() => {
      setletterClass("text-animate-hover");
    }, 4000);
  });
  return (
    <Suspense fallback={<Loader type='pacman' />}>
      <div className='landingPage_container'>
        <div className='text-zone'>
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'M,</span>
            <img src={LogoH} alt='developer' />
            <AnimatedLetters
              letterClass={letterClass}
              lettersArrey={nameArrey}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              lettersArrey={jobArrey}
              idx={15}
            />
          </h1>
          <h2>I BUILD THINGS FOR THE WEB </h2>
          <Link to='/contact' className='flat-button'>
            CONTACT ME
          </Link>
        </div>
        <div className='cubeContainer'>
          <Cube3D />
        </div>
      </div>
    </Suspense>
  );
};

export default LandingPage;
