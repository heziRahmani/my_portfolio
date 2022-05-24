import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import LogoH from "../../assets/images/letter_H.png";
import "./sideBar.scss";
import { Link, NavLink } from "react-router-dom";
const SideBar = () => {
  return (
    <div className='sideBar_container' id='sideBar_container'>
      <div className='sideBar_icon_box'>
        <Link className='logo' to={"/"}>
          <img src={LogoH} alt='logo' />
        </Link>
      </div>
      <div className='sideBar_nav_box'>
        <nav>
          <NavLink exact='true' activeclassname='active' to={"/"}>
            <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
          </NavLink>

          <NavLink
            exact='true'
            activeclassname='active'
            className='about-link'
            to={"/about"}>
            <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
          </NavLink>

          <NavLink
            exact='true'
            activeclassname='active'
            className='contact-link'
            to={"/contact"}>
            <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
          </NavLink>
        </nav>
      </div>
      <ul>
        <li>
          <a
            href='https:linkedin.com/in/hezi-rahmani'
            target={"_blanck"}
            rel='noreferrer'>
            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
          </a>
        </li>
        <li>
          <a
            href='https://github.com/heziRahmani'
            target={"_blanck"}
            rel='noreferrer'>
            <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
