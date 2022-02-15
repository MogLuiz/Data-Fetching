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

  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setData(response.data))
      .finally(() => setIsFetching(false));
  }, []);

  // -------------------------------------------------
  // Hook Return
  // -------------------------------------------------
  return { data, isFetching };
};

export default useFetch;
