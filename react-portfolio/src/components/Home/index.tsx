import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/alaa-logo-zip-file/png/logo-no-background.png'
import Aletter from '../../assets/images/Aletter.png'
import './index.scss'
import { useEffect, useState } from 'react';
import { AnimatedLetters } from '../AnimatedLetters';
import { LogoComponent } from './Logo';
import { PacmanLoader } from 'react-spinners';
import 'animate.css';


export const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['l', 'a', 'a']
  const jobArray = ['W', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => { clearTimeout(timeoutId) };
  }, []);


  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span >
            <span className={`${letterClass} _12`}>i,</span >
            <br />
            <span className={`${letterClass} _13`}>I</span >
            <span className={`${letterClass} _14`}>'m</span >
            <img src={Aletter} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />

          </h1>

          <h2>Frontend Developer / React Developer. </h2>
          <Link to='/contact' className='flat-button'>CONTACT ME</Link>
        </div>
        <LogoComponent />
      </div >

      <div className='pacMan'>
        <PacmanLoader color="#FFFF00" size={50} />
      </div>

    </>
  );
};
