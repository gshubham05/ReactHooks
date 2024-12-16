import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';


const Display = () => {
  const { name ,age} = useContext(ThemeContext); // Use the correct context here
  console.log(name,age);
  return (
    <div></div>
  )
}

export default Display