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
    axios.get(url).then((response) => setData(response.data));
  }, []);

  // -------------------------------------------------
  // Hook Return
  // -------------------------------------------------
  return { data };
};

export default useFetch;