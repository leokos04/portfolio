import { useEffect, useState } from 'react'
import { faAngular } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Sobre mí'.split('')}
              idx={15}
            />
          </h1>
          <p>
            Mi nombre es Leonardo Kostadinov, desarrollador fullstack ubicado en
            Valencia/Paterna. Con la edad de 20 años sigo formándome cada día
            con las tecnologías actuales para estar al día e ir progresando poco
            a poco mis conocimientos sobre la programación.
          </p>
          <p align="LEFT">
            Empece mis estudios con el lenguaje de programación orientado a
            objetos Java, acabando al final enamorándome de JavaScript por su
            variedad de opciones de desarrollo dominando tanto en front-end
            frameworks como React e Angular como en backend Express con NodeJs.
          </p>
        </div>
        <div className="imagePerfile">Foto...</div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default About
