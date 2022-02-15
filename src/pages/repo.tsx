// Packages
import React from "react";
import { useParams } from "react-router-dom";

// Query Client React Query
import { queryClient } from "../services/queryClient";

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
    await queryClient.invalidateQueries(["repos"]);
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
