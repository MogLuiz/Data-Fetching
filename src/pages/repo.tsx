// Packages
import React from "react";
import { useParams } from "react-router-dom";

// Query Client React Query
import { queryClient } from "../services/queryClient";

type Repository = {
  full_name: string;
  description: string;
};

const Repo: React.FC = () => {
  // -------------------------------------------------
  // Params
  // -------------------------------------------------

  const params = useParams();
  const currentRepository = params["*"] as string;

  // -------------------------------------------------
  // Functions
  // -------------------------------------------------

  const handleChangeRepositoryDescription = async () => {
    // Query Invalidate
    // await queryClient.invalidateQueries(["repos"]);

    const previousReposCache = queryClient.getQueryData<Repository[]>("repos");

    if (previousReposCache) {
      const nextReposCache = previousReposCache.map((repo) => {
        if (repo.full_name === currentRepository)
          return { ...repo, description: "Testando" };
        return repo;
      });

      queryClient.setQueryData("repos", nextReposCache);
    }
  };

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <div>
      <h1>{currentRepository}</h1>
      <button onClick={handleChangeRepositoryDescription}>
        Query Invalidate
      </button>
    </div>
  );
};

export default Repo;
