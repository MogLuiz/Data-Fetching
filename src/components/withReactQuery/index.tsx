// Packages
import axios from "axios";
import React from "react";

// React Query
import { useQuery } from "react-query";

const WithReactQuery: React.FC = () => {
  // -------------------------------------------------
  // useQuery
  // -------------------------------------------------

  const { data, isFetching } = useQuery("repos", async () => {
    const response = await axios.get(
      "https://api.github.com/users/MogLuiz/repos"
    );
    return response.data;
  });

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return <div />;
};

export default WithReactQuery;
