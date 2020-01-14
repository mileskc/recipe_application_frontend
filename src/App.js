import React from 'react';
import './App.css';
import { Routes } from './routes'
import Nav from './shared/Nav'
import Footer from './shared/Footer'

function App() {
  return (
    <div className="App">
      <header>
        <Nav/>
      </header>

      <main>
      <Routes/>
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
