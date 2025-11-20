// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import '@/css/App.css'
import MovieCard from './components/MovieCard'
import Home from "./Pages/Home";
import Favorites from './Pages/Favorites';
import {Routes, Route} from "react-router-dom"
import { MovieProvider } from './contexts/MovieContext';
import NavBar from './components/NavBar';

function App() {
return (
  <MovieProvider>
      <NavBar />
  <main className='main-content'>
    <Routes>
          <Route path="/" element={<Home />}/> 
          <Route path="/favorites" element={<Favorites />}/> 
    </Routes>
  </main>
  </MovieProvider>
  ); 
}

export default App;
