import React, { useEffect, useRef, useState } from 'react';
import { AnimatedLetters } from '../AnimatedLetters';
import './index.scss';
import { PacmanLoader } from 'react-spinners';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const refForm = useRef<HTMLFormElement | null>(null);
  const mapRef = useRef<L.Map | null>(null); // Specify the initial type as L.Map | null
  const [smallScreen, setSmallScreen] = useState(false)


  useEffect(() => {
    if (window.innerWidth <= 700) {
      setSmallScreen(true)
    }
  }, [smallScreen])

  useEffect(() => {
    const timeId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  const handlerSendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (refForm.current) {
      emailjs
        .sendForm(
          'service_c30j59p',
          'template_f55xabq',
          refForm.current,
          'rzdnIAcLrH1k8-RMx'
        )
        .then(
          () => {
            alert('Message successfully sent!');
            window.location.reload(); // Refreshes the page
          },
          () => {
            alert('Failed to send the message, please try again!');
          }
        );
    } else {
      console.error('refForm is null');
    }
  };

  useEffect(() => {
    // Create the map only if it doesn't already exist
    if (!mapRef.current) {
      // Initialize the map
      const map = L.map('map').setView([0, 0], 13); // Default view with a placeholder location (latitude 0, longitude 0) and zoom level

      // Add a tile layer (you can choose any tile provider)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
      }).addTo(map);

      // Use the Geolocation API to get the user's current position
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          // Set the map's view to the user's current location
          map.setView([lat, lon], 13);

          // Create a marker at the user's location
          const marker = L.marker([lat, lon]).addTo(map);

          // Create a popup for the marker with a message
          marker.bindPopup('I live here :)').openPopup();
        });

        // Save the map instance in the ref
        mapRef.current = map;
      }
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>

          <p>
            I am interested in full-time opportunities ~ especially ambitious or
            large projects. However, if you have other requests or questions,
            don't hesitate to contact me using the form below.
          </p>

          <div className="contact-form">
            <form ref={refForm} onSubmit={handlerSendEmail}>
              <ul>
                <div className="name__email">
                  <li className="half">
                    <input type="text" name="name" placeholder="Name" required />
                  </li>

                  <li className="half">
                    <input type="email" name="email" placeholder="Email" required />
                  </li>
                </div>

                <li>
                  <input placeholder="Subject" type="text" name="subject" required />
                </li>

                <li>
                  <textarea placeholder="Message" name="message" required></textarea>
                </li>

                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        <div className="info-map">
          Ala El Achkar, <br />
          Turkey, <br />
          Mithatpaşa Mh 19, 22000 <br />
          Istanbul <br />
          <span>ala.elachkar.job@gmail.com</span>
        </div>

        <div className="map-wrap">
          <div className='leaflet-container' id="map" style={{ height: '100vh' }}></div>
          {smallScreen && (
            <div className='scroll-up-container' onClick={scrollToTop}>
              <FontAwesomeIcon className='scroll-up-icon' icon={faArrowUp} />
              Scroll Back Up
            </div>
          )}
        </div>
      </div>

      <div className="pacMan">
        <PacmanLoader color="#FFFF00" size={50} />
      </div>
    </>
  );
};
