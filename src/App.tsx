// Packages
import React from "react";
import { Route, Routes } from "react-router-dom";

// Pages
import { Repo, Repos } from "./pages";

const App: React.FC = () => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <Routes>
      <Route path="/" element={<Repos />} />
      <Route path="/repo/*" element={<Repo />} />
    </Routes>
  );
};

export default App;
