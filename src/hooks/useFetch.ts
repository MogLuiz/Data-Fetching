//Hooks
import { useEffect, useState } from "react";

// Services
import axios from "axios";

const useFetch = <T = unknown>(url: string) => {
  // -------------------------------------------------
  // States
  // -------------------------------------------------

  const [data, setData] = useState<T | null>(null);

  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------

  useEffect(() => {
    axios
      .get("https://api.github.com/users/MogLuiz/repos")
      .then((response) => setData(response.data));
  }, []);
};

export default useFetch;
