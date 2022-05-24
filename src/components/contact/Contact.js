import React, { Suspense, useEffect, useState, useRef } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../generalComponent/animatedLetters/AnimatedLetters";
import "./contact.scss";
import emailJs from "@emailjs/browser";
const Contact = () => {
  const [letterClass, setletterClass] = useState("text-animate");
  const contactMe = "CONTACT ME".split("");

  let _nameRef = useRef();
  let _emailRef = useRef();
  let _subjectRef = useRef();
  let _messageRef = useRef();
  let _formRef = useRef();

  const sendFormHendeler = (e) => {
    const {
      REACT_APP_Mail_service,
      REACT_APP_Mail_template,
      REACT_APP_Mail_key,
    } = process.env;
    e.preventDefault();
    emailJs
      .sendForm(
        REACT_APP_Mail_service,
        REACT_APP_Mail_template,
        _formRef.current,
        REACT_APP_Mail_key
      )
      .then(
        () => {
          alert("message successfully sent!");
          _nameRef.current.value = "";
          _emailRef.current.value = "";
          _subjectRef.current.value = "";
          _messageRef.current.value = "";
        },
        () => {
          alert("failed to send the message, please try again ");
        }
      );
  };
  useEffect(() => {
    setTimeout(() => {
      setletterClass("text-animate-hover");
    }, 3000);
  });
  return (
    <Suspense fallback={<Loader type='pacman' />}>
      <div className='contact_container'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              lettersArrey={contactMe}
              letterClass={letterClass}
              idx={15}
            />
          </h1>
          <p>
            I am interested in a full-stack or front-end development position.
            <br /> However, don't hesitate to contact me if you have any other
            Interesting opportunities or just to say Hi
          </p>
        </div>
        <form
          ref={_formRef}
          onSubmit={(e) => sendFormHendeler(e)}
          className='contact_form'
          id='contact_form'>
          <ul>
            <li className='half nameInput'>
              <input
                type='text'
                name='name'
                ref={_nameRef}
                placeholder='Name'
                required
              />
            </li>
            <li className='half'>
              <input
                type='email'
                ref={_emailRef}
                name='email'
                placeholder='E-Mail'
                required
              />
            </li>
            <li>
              <input
                type='text'
                name='subject'
                placeholder='Subject'
                ref={_subjectRef}
                required
              />
            </li>
            <li>
              <textarea
                name='message'
                placeholder='Message'
                ref={_messageRef}
                required
              />
            </li>
            <li>
              <input className='flat-button' type='submit' value='send' />
            </li>
          </ul>
        </form>
      </div>
    </Suspense>
  );
};

export default Contact;
