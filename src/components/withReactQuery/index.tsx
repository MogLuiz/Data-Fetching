// Packages
import axios from "axios";
import React from "react";

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
    "repos",
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
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default WithReactQuery;
