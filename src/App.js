import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './Components/Home'
import Article from './Components/Article'

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:headline" element={<Article />} />
      </Routes>
    </main>
  )
}

export default App;
