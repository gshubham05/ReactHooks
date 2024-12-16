import React from 'react'
import { useLocation } from 'react-router-dom'

const About = () => {
    const lcoation = useLocation()
    console.log(lcoation)
  return (
    <div>About</div>
  )
}

export default About