import './index.scss'
import { AnimatedLetters } from "../AnimatedLetters";
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { Audio } from 'react-loader-spinner'

export const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000);

    return () => { clearTimeout(timeId) };
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
              letterClass={'text-animate'} />
          </h1>

          <p>
            I'm very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>

          <p>
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops and design problem at a time
          </p>

          <p>
            If I need to define myself in one sentence that would be a family
            person, people lover, self critical, tech passionate !
          </p>
        </div>

        <div className='stage-cube-cont'>
          <div className='cube-spinner'>
            <div className='face1'>
              <FontAwesomeIcon icon={faReact} color='#DD0031' />
            </div>

            <div className='face2'>
              <FontAwesomeIcon icon={faHtml5} color='#F06529' />
            </div>

            <div className='face3'>
              <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
            </div>

            <div className='face4'>
              <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
            </div>

            <div className='face5'>
              <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
            </div>

            <div className='face6'>
              <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
            </div>
          </div>
        </div>
      </div>

      <Audio  className="audioLoader" height='100' width="100" color="yellow" arialabel="loading" />

    </>
  )
};
