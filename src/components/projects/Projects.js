import { Suspense, useEffect, useState } from "react";
import AnimatedLetters from "../generalComponent/animatedLetters/AnimatedLetters";
// import YoutubeEmbed from "../embedYouTubViedeos/EmbededViedeos";
import "./projects.scss";
import {
  faCss3,
  faCss3Alt,
  faGithubAlt,
  faHtml5,
  faJs,
  faJsSquare,
  faLinkedin,
  faNodeJs,
  faReact,
  faSass,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { SiExpress, SiMongodb } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import YoutubeEmbed from "./embedYouTubViedeos/EmbededViedeos";
import Loader from "react-loaders";

const Projects = () => {
  const [letterClass, setletterClass] = useState("text-animate");

  const projectsArrey = "LATEST PROJECTS".split("");
  const StudyBuddyArrey = "STUDY BUDDY".split("");
  const RestfulAPIArrey = "Restful API".split("");
  const poltrixArrey = "POULTRIX".split("");
  useEffect(() => {
    setTimeout(() => {
      setletterClass("text-animate-hover");
    }, 3000);
  });
  return (
    <Suspense fallback={<Loader type='pacman' />}>
      <div className='projects_container'>
        <div className='projects_header_box'>
          <h2>
            <AnimatedLetters
              letterClass={letterClass}
              lettersArrey={projectsArrey}
              idx={15}
            />
          </h2>
        </div>
        <div className='cards_container'>
          <div className='single_project_card'>
            <div className='single_project_card_text left_box'>
              <h3>
                <AnimatedLetters
                  letterClass={letterClass}
                  lettersArrey={StudyBuddyArrey}
                  idx={15}
                />
              </h3>
              <p>
                Personal website for storing data and practicing new things.
              </p>
              <div className='project_links_box'>
                <li>
                  <div>
                    <label>Project Github Link: </label>
                  </div>
                  <div>
                    <a
                      href='https://github.com/heziRahmani/studyBuddy-Client-side_2022'
                      target={"_blanck"}
                      rel='noreferrer'>
                      <FontAwesomeIcon icon={faGithubAlt} color='#888888' />
                    </a>
                  </div>
                </li>
                <li className='youTubLink'>
                  <div>
                    <label>Project Youtube Link: </label>
                  </div>
                  <div>
                    <a
                      href='https:linkedin.com/in/hezi-rahmani'
                      target={"_blanck"}
                      rel='noreferrer'>
                      <FontAwesomeIcon icon={faYoutube} color='#ED254EFF' />
                    </a>
                  </div>
                </li>
              </div>
              <div className='projectStack_container'>
                <h4>Stack</h4>

                <div className='projectStack_icons'>
                  <div className='icon'>
                    <FontAwesomeIcon
                      icon={faNodeJs}
                      color='rgba(255, 255, 255, 0.5);'
                    />
                  </div>
                  <div className='icon'>
                    <FontAwesomeIcon
                      icon={faHtml5}
                      color='rgba(255, 255, 255, 0.5);'
                    />
                  </div>
                  <div className='icon'>
                    <FontAwesomeIcon
                      icon={faJsSquare}
                      color='rgba(255, 255, 255, 0.5);'
                    />
                  </div>
                  <div className='icon'>
                    <FontAwesomeIcon
                      icon={faReact}
                      color='rgba(255, 255, 255, 0.5);'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='single-project-card-viedeo'>
              <YoutubeEmbed embedId='D6YwdpUo8V8' />
            </div>
          </div>
          <div className='single_project_card'>
            <div className='single_project_card_text left_box'>
              <h3>
                <AnimatedLetters
                  letterClass={letterClass}
                  lettersArrey={RestfulAPIArrey}
                  idx={15}
                />
              </h3>
              <p>
                includes CRUD operation and an auth.
                <br />
                <span className='importenSpan'>IMPORTANT NOTE! :</span> a video
                for this project will come in a later date
              </p>
              <div className='project_links_box'>
                <li>
                  <div>
                    <label>project github link: </label>
                  </div>
                  <div>
                    <a
                      href='https://github.com/heziRahmani/studyBuddy_server_side_2022'
                      target={"_blanck"}
                      rel='noreferrer'>
                      <FontAwesomeIcon icon={faGithubAlt} color='#888888' />
                    </a>
                  </div>
                </li>
                <li className='youTubLink'>
                  <div>
                    <label>project Youtube link: </label>
                  </div>
                  <div>
                    <a
                      href='https:linkedin.com/in/hezi-rahmani'
                      target={"_blanck"}
                      rel='noreferrer'>
                      <FontAwesomeIcon icon={faYoutube} color='#ED254EFF' />
                    </a>
                  </div>
                </li>
              </div>
              <div className='projectStack_container'>
                <h4>Stack</h4>

                <div className='projectStack_icons'>
                  <div className='icon'>
                    <SiExpress />
                  </div>
                  <div className='icon'>
                    <DiNodejs />
                  </div>
                  <div className='icon'>
                    <SiMongodb />
                  </div>
                </div>
              </div>
            </div>
            <div className='single-project-card-viedeo'>
              <YoutubeEmbed embedId='RS7trxkb0zE' />
            </div>
          </div>
          <div className='single_project_card'>
            <div className='single_project_card_text left_box'>
              <h3>
                <AnimatedLetters
                  letterClass={letterClass}
                  lettersArrey={poltrixArrey}
                  idx={15}
                />
              </h3>
              <p>
                After I finished my studies I started to work at poultrix as a
                full-stack programmer.
                <br /> This is a semple of my work there.
              </p>

              <div className='projectStack_container'>
                <h4>Stack</h4>

                <div className='projectStack_icons'>
                  <div className='icon'>C#</div>
                  <div className='icon'>
                    <AiOutlineConsoleSql />
                  </div>
                  <div className='icon'>
                    <FontAwesomeIcon icon={faJsSquare} color='#6E8898FF' />
                  </div>
                  <div className='icon'>
                    <FontAwesomeIcon icon={faHtml5} color='#6E8898FF' />
                  </div>
                  <div className='icon'>
                    <FontAwesomeIcon icon={faCss3Alt} color='#6E8898FF' />
                  </div>
                </div>
              </div>
            </div>
            <div className='single-project-card-viedeo'>
              <YoutubeEmbed embedId='bftZ8x41yzA' />
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Projects;
