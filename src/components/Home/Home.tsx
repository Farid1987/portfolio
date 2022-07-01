import { useEffect, useState } from 'react';

import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import AnimatedLogo from '../AnimatedLogo/AnimatedLogo';

import './Home.style.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = 'Farid'.split('');
  const jobArray = 'Frontend Developer'.split('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="home-page">
      <div className="text-zone">
        <h1 className="with-tag">
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I'</span>
          <span className={`${letterClass} _14`}>m&nbsp;</span>
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
          <br />
          <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={20} />
        </h1>
        <p className="with-tag">ReactJS / VueJS / NextJS Developer</p>
      </div>
      <AnimatedLogo />
    </div>
  );
};

export default Home;
