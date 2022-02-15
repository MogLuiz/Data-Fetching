// Packages
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

// React Query
import { useQuery } from "react-query";

type Repository = {
  full_name: string;
  description: string;
};

const WithReactQuery: React.FC = () => {
  // -------------------------------------------------
  // useQuery
  // -------------------------------------------------

  const { data: repositories, isFetching } = useQuery<Repository[]>(
    "repos", // Primeiro parâmetro é a chave do meu cache
    async () => {
      const response = await axios.get(
        "https://api.github.com/users/MogLuiz/repos"
      );
      return response.data;
    }
  );

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <ul>
      {isFetching && <p>Loading...</p>}
      {repositories?.map((repo) => {
        return (
          <li key={repo.full_name}>
            <Link to={`repo/${repo.full_name}`}>{repo.full_name}</Link>
            <p>{repo.description}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default WithReactQuery;
