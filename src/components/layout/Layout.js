import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../sideBar/SideBar";
import "./layout.scss";
const Layout = () => {
  // tuggle sideBar function
  function tuggleHendeler() {
    const icon = document.querySelector(".icon");
    const sideBar = document.getElementById("sideBar_container");

    icon.classList.toggle("open");

    sideBar.classList.toggle("openSideBar");
  }
  return (
    <div className='layout_container' id='layout_container'>
      <div className='tuggleSideBar_box'>
        <div
          className='icon navBar_tuggle_icon'
          onClick={() => tuggleHendeler()}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <SideBar />
      <div className='layout_body'>
        <span className='tags top-tags-html'>&lt;/html&gt;</span>

        <span className='tags top-tags'>&lt;body&gt;</span>

        <Outlet />

        <span className='tags bottom-tags'>
          &lt;/body&gt;
          <br></br>
          <span className='bottom-tags-html'>&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  );
};

export default Layout;
