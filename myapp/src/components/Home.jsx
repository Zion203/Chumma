import React from 'react';

const Home = ({ switchPage, theme, toggleTheme ,setScore}) => {
  const handlePlayButtonClick = () => {
    switchPage('quiz');
  };
  setScore(0)
  return (
    <div className={`home-container ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
      <img src="https://png.pngtree.com/png-vector/20220827/ourmid/pngtree-quiz-time-png-image_6125411.png" alt="" />
      
      <button
        onClick={handlePlayButtonClick}
        className={`play-button ${theme === 'light' ? 'light-theme-button' : 'dark-theme-button'}`}
      >
        Play
      </button>

      <button
        onClick={toggleTheme}
        className={`theme-switcher ${theme === 'light' ? 'light-theme-button' : 'dark-theme-button'}`}
      >
        {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
      </button>
    </div>
  );
};

export default Home;
