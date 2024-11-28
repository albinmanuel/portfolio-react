import React, { useState } from 'react';
import About from '../About/About';
import "../Body/Body.css"

function Body() {
  const [about, setAbout] = useState({
      h: 'About Me',
      par: 'Hey there! I’m Albin Manuel, a passionate web developer and designer based in Kochi, India. I hold a degree in B.Tech Computer Science from APJ Abdhul Kalam Technological University. Today, I specialize in full stack development, obsessing over clean code and delightful user experiences. I’m currently doing my works in HTML, CSS, PHP, Django. Let’s connect—I’d love to chat about projects, collaborate, or simply geek out over code. Feel free to reach out via LinkedIn or drop me an email.',
      image: 'https://th.bing.com/th/id/OIG2.VEvp0QiPikPhyh1X28F4?pid=ImgGn'
  });

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);
      document.body.classList.toggle('dark-mode', !isDarkMode); 
  };

  return (
      <div>
          <About det={about} />
          <div>
              <button onClick={toggleTheme} className={`btn btn-${isDarkMode ? 'light' : 'dark'} mx-3 mb-3`}>
                  {isDarkMode ? (
                      <>
                          <i className="fas fa-sun"></i> Light Mode
                      </>
                  ) : (
                      <>
                          <i className="fas fa-moon"></i> Dark Mode
                      </>
                  )}
              </button>
          </div>
      </div>
  );
}

export default Body;
