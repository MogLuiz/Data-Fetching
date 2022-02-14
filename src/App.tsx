// Packages
import React, { useEffect, useState } from "react";

type Repository = {
  full_name: string;
  description: string;
};

const App: React.FC = () => {
  // -------------------------------------------------
  // States
  // -------------------------------------------------

  const [repositories, setRepositories] = useState<Repository[]>([]);

  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------

  useEffect(() => {
    fetch("https://api.github.com/users/MogLuiz/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <ul>
      {repositories.map((repo) => {
        return (
          <li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default App;
