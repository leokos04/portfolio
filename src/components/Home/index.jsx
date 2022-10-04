import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = 'Leonardo'.split('')
  const jobArray = 'Desarrollador  Web  en  Valencia'.split(' ')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={`${letterClass} _13`}>H</span>
            <span className={`${letterClass} _14`}>o</span>
            <span className={`${letterClass} _15`}>l</span>
            <span className={`${letterClass} _16`}>a,</span>
            <br />
            <span className={`${letterClass} _17`}>s</span>
            <span className={`${letterClass} _18`}>o</span>
            <span className={`${letterClass} _19`}>y</span>
            <span className={`${letterClass} _19`}></span>

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
          <h2>Desarrollador fullstack en Valencia</h2>
        </div>
      </div>

      <Loader type="ball-pulse"></Loader>
    </>
  )
}

export default Home
