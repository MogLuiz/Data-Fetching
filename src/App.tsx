// Packages
import React from "react";

// Components
import { RequestWithReactQuery, RequestWithoutReactQuery } from "./components";

// RequestWithReactQuery --> Request using React-Query

// RequestWithoutReactQuery --> Request using the custom Hook

const App: React.FC = () => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <>
      {/* <RequestWithoutReactQuery /> */}
      <RequestWithReactQuery />
    </>
  );
};

export default App;
