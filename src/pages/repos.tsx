// Packages
import React from "react";

// Components
import { RequestWithReactQuery, RequestWithoutReactQuery } from "../components";

// RequestWithReactQuery --> Request using React-Query

// RequestWithoutReactQuery --> Request using the custom Hook

const Repos: React.FC = () => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return <RequestWithReactQuery />;
};

export default Repos;
