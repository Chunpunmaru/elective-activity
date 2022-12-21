import React from "react";
import { Link } from "react-router-dom";
 

export default function NavBar() {
  return (
    <nav className='Nav-Bar'>
        <div className='Nav-Bar-Page'><Link to="/">Home</Link></div>
        <div className='Nav-Bar-Page'><Link to="/about">About my self</Link></div>
        <div className='Nav-Bar-Page'><Link to="/anime">Anime</Link></div>
        <div className='Nav-Bar-Page'><Link to="/manga">Manga</Link></div>
        <div className='Nav-Bar-Page'><Link to="/games">Games</Link></div>
        <div className='Nav-Bar-Page'><Link to="/projects">Projects</Link></div>
    </nav>
  )
}
