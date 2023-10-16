import { FormEvent, useEffect, useRef, useState } from 'react';
import { AnimatedLetters } from '../AnimatedLetters';
import './index.scss';
import { PacmanLoader } from 'react-spinners';
import emailjs from '@emailjs/browser'

export const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef<HTMLFormElement | null>(null)

  useEffect(() => {
    const timeId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000);

    return () => { clearTimeout(timeId) };
  }, [])

  const handlerSendEmail = (e: FormEvent) => {
    e.preventDefault()

    if (refForm.current) {
      emailjs.sendForm(
        'service_c30j59p',
        'template_f55xabq',
        refForm.current,
        'rzdnIAcLrH1k8-RMx'
      )
        .then(
          () => {
            alert('Message successfully sent!')
            window.location.reload(); //refreshes the page 
          },
          () => {
            alert('Failed to send the message, please try again!')
          }
        );
    } else {
      console.error("refForm is null");
    }
  }
  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15} />
          </h1>

          <p>
            I am interested in full-time opportunities ~ especially ambitious or
            large projects. However, if you have other request or question,
            dont hesitate to contact me using using below form either
          </p>

          <div className='contact-form'>
            <form ref={refForm} onSubmit={handlerSendEmail}>
              <ul>
                <li className='half'>
                  <input type="text" name='name' placeholder='Name' required />
                </li>

                <li className='half'>
                  <input type="email" name='email' placeholder='Email' required />
                </li>

                <li>
                  <input placeholder="Subject" type="text" name="subject" required />
                </li>

                <li>
                  <textarea placeholder='Message' name='message' required></textarea >
                </li>

                <li>
                  <input type="submit" className='flat-button' value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>


      </div>

      <div className='pacMan'>
        <PacmanLoader color="#FFFF00" size={50} />
      </div>
    </>
  );
};
