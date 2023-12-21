import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Quote from "./Pages/Quote";
import Restaurent from "./Pages/Restaurant";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/restaurants" element={<Restaurent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
