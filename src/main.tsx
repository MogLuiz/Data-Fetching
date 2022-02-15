// Packages
import React from "react";
import ReactDOM from "react-dom";

// Components
import App from "./App";

// Providers
import { QueryClientProvider } from "react-query";
import { queryClient } from "./services/queryClient";

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
