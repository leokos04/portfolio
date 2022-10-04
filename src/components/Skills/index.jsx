import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faDocker,
  faGit,
  faGitAlt,
  faHtml5,
  faJava,
  faJsSquare,
  faNodeJs,
  faNpm,
  faPhp,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './index.scss'
import { faBorderAll } from '@fortawesome/free-solid-svg-icons'
const Skills = () => {
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
              strArray={'Conocimientos'.split('')}
              idx={15}
            />
          </h1>
          <p>
            No soy diseñador, pero tengo buen ojo para los detalles, pongo
            especial esfuerzo hacia la experiencia de usuario. Con conocimientos
            para realizar proyectos con Node.js y unirlo en React para ofrecer
            mayor sinergia. Actualmente, me estoy formando con el lenguaje de
            programación TypeScript.
          </p>
        </div>
        <div className="imageEdit">
          <h2>
            <u>Front-End</u>
          </h2>
          <div className="iconoC">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <h2>
            <u>Back-End</u>
          </h2>
          <div className="iconoC">
            <FontAwesomeIcon icon={faJava} color="#f89820" />
            <FontAwesomeIcon icon={faPhp} color="#AEB2D5" />
            <FontAwesomeIcon icon={faNodeJs} color="#3c873a" />
          </div>
          <h2>
            <u>Herramientas</u>
          </h2>
          <div className="iconoC">
            <FontAwesomeIcon icon={faDocker} color="#384d54" />
            <FontAwesomeIcon icon={faNpm} color="#CC3534" />
            <FontAwesomeIcon icon={faGitAlt} color="#F1502F" />
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Skills
