import React, { useState , useEffect} from 'react';
import Home from './components/Home';
import QuizApp from './components/QuizApp';
import Result from './components/Result';
import "./App.css"

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [theme, setTheme] = useState('light');
  const [score, setScore] = useState(0);

  const switchPage = (page) => {
    setCurrentPage(page);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.classList.remove('light-theme1', 'dark-theme1');
    document.body.classList.add(theme === 'light' ? 'light-theme1' : 'dark-theme1');
  }, [theme]);

  return (
    <div>
      {currentPage === 'home' && <Home switchPage={switchPage} theme={theme} toggleTheme={toggleTheme} setScore={setScore}/>}
      {currentPage === 'quiz' && <QuizApp switchPage={switchPage} theme={theme} toggleTheme={toggleTheme} setScore={setScore} />}
      {currentPage === 'result' && ( <Result switchPage={switchPage} theme={theme} setTheme={setTheme} score={score}/> )}
    </div>
  );
};

export default App;
