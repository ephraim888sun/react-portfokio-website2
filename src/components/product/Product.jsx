import React, { useContext } from 'react'
import { ThemeContext } from '../../context';
import './product.css'

const Product = ({ img, link }) => {

  const theme = useContext(ThemeContext);
  const blueMode = theme.state.blueMode;

  return (
    <div
      className='p'
      style={{ borderColor: blueMode ? '#0033A0' : "#C8102E", }}
    >
      <div
        className="p-browser"
        style={{ backgroundColor: blueMode ? '#0033A0' : "#C8102E", }}
      >
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target='_blank' rel='noreferrer'>
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
  )
}

export default Product