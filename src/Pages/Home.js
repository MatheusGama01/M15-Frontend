import React from 'react';
import HomePage from '../Components/Home/HomePage.js';
import Header from '../Components/Header/Header.js';
function Home() {
  return (
    <div className="Home">
      <Header/>
      <div className="container d-flex align-items-center flex-column">
          <HomePage/>
      </div>      
    </div>
  );
}

export default Home;