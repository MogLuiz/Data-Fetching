//Hooks
import { useEffect, useState } from "react";

// Services
import axios from "axios";

const useFetch = <T = unknown>(url: string) => {
  // -------------------------------------------------
  // States
  // -------------------------------------------------

  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setData(response.data))
      .catch((err) => setError(err))
      .finally(() => setIsFetching(false));
  }, []);

  // -------------------------------------------------
  // Hook Return
  // -------------------------------------------------
  return { data, isFetching, error };
};

export default useFetch;
