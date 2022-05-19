import { FaHackerrank, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}</span>
        </h1>
      )}
      {role && <h2 className='about__role'>{role}</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <FaGithub size={50}/>
              </a>
            )}
            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <FaLinkedin size={50}/>
              </a>
            )}
            {social.leetcode && (
              <a
                href={social.leetcode}
                aria-label='leetcode'
                className='link link--icon'
              >
                <SiLeetcode size={50}/>
              </a>
            )}
            {social.hackerrank && (
              <a
                href={social.hackerrank}
                aria-label='hackerrank'
                className='link link--icon'
              >
                <FaHackerrank size={50}/>
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
