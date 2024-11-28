import React, { useState } from 'react';
import '../Header/Header.css'
import { Link } from 'react-router-dom';


export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <div>
      <header className="header">
      <nav>
        <ul className="nav-links">
          <Link to={'/'} >
          <li><a href="#home">Home</a></li>
          </Link>
          <Link to={'/body'}>
          <li><a href="#about">About</a></li>
          </Link>
          <Link to={'/projects'}>
          <li><a href="#projects">Projects</a></li>
          </Link>
          <Link to={'/contact'}>
          <li><a href="#contact">Contact</a></li>
          </Link>
        </ul>
      </nav>
    </header>
    </div>
  );
}
