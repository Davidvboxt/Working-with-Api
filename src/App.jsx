import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { CardDetail } from "./pages/cardDetail";

// CSS
import "../styles/globals.css";

import "../styles/hero.scss";
import "../styles/header.scss";

import "../styles/categories.scss";

import "../styles/anime-list.scss";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/:id' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/anime/:id' element={<CardDetail />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
