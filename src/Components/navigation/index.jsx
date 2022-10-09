import React from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './style.scss'

const Navigation = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="navbar-links__container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is GPT?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
        <div className="navbar-sign">
          <p>Sign in</p>
          <button type="button">Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default Navigation