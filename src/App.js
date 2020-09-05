import React from 'react';
import Header from './components/header.js';
import ContentLeft from './components/contentLeft.js';
import ContentRight from './components/contentRight.js';
import './App.css';

function App() {


  return (
    <div>
    <Header></Header>
    
    <ContentLeft></ContentLeft>
    <ContentRight></ContentRight>
    </div>

  );
}

export default App;
