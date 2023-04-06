import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import Auth from "./pages/auth";
import CreateRecipes from "./pages/create-recipes";
import Home from "./pages/home";
import SavedRecipes from "./pages/saved-recipes";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/create" element={<CreateRecipes />} />
          <Route path="/saved" element={<SavedRecipes />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
