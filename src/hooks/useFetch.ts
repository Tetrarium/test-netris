import { useLayoutEffect, useState } from "react";

type ResponceData<T> = {
  data: null;
  isLoading: true;
  error: null;
  reload: () => void;
} | {
  data: T,
  isLoading: false;
  error: null;
  reload: () => void;
} | {
  data: null;
  isLoading: false;
  error: Error;
  reload: () => void;
};

export default function useFetch<T>(url: string): ResponceData<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useLayoutEffect(() => {
    setIsLoading(true);
    setData(null);
    setError(null);

    Promise.resolve()
      .then(() => fetch(url))
      .then(data => data.json())
      .then((data: T) => setData(data))
      .catch(e => setError(e))
      .finally(() => setIsLoading(false));
  }, []);


  return { data, isLoading, error } as ResponceData<T>;
}