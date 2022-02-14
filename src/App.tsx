// Packages
import React, { useEffect, useState } from "react";

type Repository = {
  full_name: string;
  description: string;
};

const App: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  // -------------------------------------------------
  // Render
  // -------------------------------------------------

  useEffect(() => {
    fetch("https://api.github.com/users/MogLuiz/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);
  return <h1>Olá</h1>;
};

export default App;
