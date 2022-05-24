import {
  faCss3,
  faHtml5,
  faJs,
  faJsSquare,
  faNodeJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./cube3D.scss";

import React from "react";

const Cube3D = () => {
  return (
    <div className='cube'>
      <div className='face front'>
        <FontAwesomeIcon icon={faCss3} color='#ABD1C9FF' />
      </div>
      <div className='face back'>
        <FontAwesomeIcon icon={faHtml5} color='#ED254EFF' />
      </div>
      <div className='face left'>
        <FontAwesomeIcon icon={faJsSquare} color='#FCF6B1FF' />
      </div>
      <div className='face right'>
        <FontAwesomeIcon icon={faNodeJs} color='#6E8898FF' />
      </div>
      <div className='face top'>
        <FontAwesomeIcon icon={faReact} color='#2E5266FF' />
      </div>
      <div className='face bottom'>
        <FontAwesomeIcon icon={faSass} color='#DBB04AFF' />
      </div>
    </div>
  );
};

export default Cube3D;
