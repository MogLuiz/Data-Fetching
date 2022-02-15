// Packages
import React from "react";

// Custom Hooks
import useFetch from "./hooks/useFetch";

type Repository = {
  full_name: string;
  description: string;
};

const App: React.FC = () => {
  // -------------------------------------------------
  // Custom Hooks
  // -------------------------------------------------

  const { data: repositories, isFetching } = useFetch<Repository[]>(
    "https://api.github.com/users/MogLuiz/repos"
  );

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <ul>
      { isFetching && <p>Loading...</p> }
      {repositories?.map((repo) => {
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
