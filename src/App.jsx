import React from "react";
import Navbar from "./components/Navbar";
import Checkout from "./pages/Checkout";
import Recommendion from "./components/Recommendation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cart, Explore, Home, Preview } from "./pages/index";

const App = () => {
  return (
    <div className="bg-gray-50 dark:bg-[#121212] h-full overflow-y-hidden">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/preview/:id" element={<Preview />} />
        <Route path="/checkout" element={<Checkout />} />

      </Routes>
    </div>
  );
};

export default App;
