import { useEffect, useState } from 'react';
import './index.scss';
import { PacmanLoader } from 'react-spinners';
import { AnimatedLetters } from '../AnimatedLetters';
import { DocumentData, collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../../firebase';



export const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [portfolio, setPortfolio] = useState<DocumentData[]>([])

  useEffect(() => {
    const timeId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000);

    return () => { clearTimeout(timeId) };
  }, [])

  useEffect(() => {
    getPortfolio()
  }, [])

  const getPortfolio = async () => {
    const querySnapshot = await getDocs(collection(db, 'portfolio'))
    setPortfolio(querySnapshot.docs.map(doc => doc.data()))

  }

  const renderPortfolio = (portfolio: DocumentData[]) => {
    return (
      <div className='images-container'>
        {portfolio.map((item, idx) => (
          <div className='image-box' key={idx}>
            <img
              src={item.image}
              alt={`Portfolio ${idx}`}
              className='portfolio-image'
            />
            <div className='content'>
              <p className='title'>{item.name}</p>
              <h4 className='description'>{item.description}</h4>
              <button
                className='btn'
                onClick={() => window.open(item.url)}
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <>
      <div className='container portfolio-page'>
        <h1 className='page-title'>
          <AnimatedLetters
            strArray={"Portfolio".split("")}
            idx={15}
            letterClass={letterClass} />
        </h1>

        <div>
          {renderPortfolio(portfolio)}
        </div>
      </div>

      <div className="pacMan">
        <PacmanLoader color="#FFFF00" size={50} />
      </div>
    </>

  )
};
