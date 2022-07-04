import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faHtml5, faJsSquare, faReact, faSass, faVuejs } from '@fortawesome/free-brands-svg-icons';

import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';

import './About.style.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const aboutArray = 'About me'.split('');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover white');
    }, 3000);
  }, []);

  useEffect(() => {
    if (!letterClass.includes('text-animate-hover')) return;

    const textAnimate = document.querySelectorAll('.text-animate-hover');
    for (let i = 0; i < textAnimate.length; i++) {
      textAnimate[i].addEventListener('mouseenter', function () {
        textAnimate[i].classList.add('rubberBand', 'white');

        textAnimate[i].addEventListener(
          'animationend',
          () => {
            textAnimate[i].classList.remove('rubberBand');
          },
          {
            once: true,
          }
        );
      });
    }
  }, [letterClass]);

  return (
    <>
      <div className="about-page">
        <div className="text-zone">
          <h1 className="with-tag">
            <AnimatedLetters letterClass={letterClass} strArray={aboutArray} idx={15} />
          </h1>
          <p className="with-tag">
            I'm an innovative Frontend Developer with experience creating and optimizing interactive and user-friendly
            websites. Proficient in HTML5, CSS3, Javascript, and modern libraries and frameworks such as Vue and React.
            <br />
            You can see my portfolio{' '}
            <a href="https://s.id/portfolio-farid" rel="noreferrer" target="_blank">
              here
            </a>
            .
            <br />
            <small>
              <strong>*process moving to this website</strong>
            </small>
          </p>
        </div>

        <div className="cube-container">
          <div className="cube-wrapper">
            <div className="cube-spinner">
              <div className="rect1">
                <FontAwesomeIcon icon={faSass} color="#cc6699" />
              </div>
              <div className="rect2">
                <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
              </div>
              <div className="rect3">
                <FontAwesomeIcon icon={faVuejs} color="#42b883" />
              </div>
              <div className="rect4">
                <FontAwesomeIcon icon={faHtml5} color="#f06529" />
              </div>
              <div className="rect5">
                <FontAwesomeIcon icon={faCss3Alt} color="#28a4d9" />
              </div>
              <div className="rect6">
                <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader active={true} type="square-spin" />
    </>
  );
};

export default About;
