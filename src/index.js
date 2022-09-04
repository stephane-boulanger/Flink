import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./Components/Home/App";

import Products from "./Components/Products/Products";
import Home from "./Components/Home/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/products" element={<Products />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>
);
