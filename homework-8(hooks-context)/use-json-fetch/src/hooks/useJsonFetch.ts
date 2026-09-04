import { useEffect, useState } from "react";

function useJsonFetch<T = unknown>(url: string, opts?: RequestInit) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    fetch(url, opts)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка ответа: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => {
        setError(error as Error);
        setLoading(false);
      });
  }, [url, opts]);
  return [data, loading, error] as const;
}
export { useJsonFetch };
