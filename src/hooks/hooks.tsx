import { useEffect, useState } from "react";

export function useFetch<T>(url: string): T | null {
  const [data, setData] = useState<T | null>(null);
  useEffect(() => {
    async function fetchData() {
      let response = await fetch(url);
      let responsData: T = await response.json();
      setData(responsData);
    }

    fetchData();
  }, [url]);

  return data;
}

export const useFetch2 = <T,>(url: string): T | null => {
  const [data, setData] = useState<T | null>(null);
  useEffect(() => {
    async function fetchData() {
      let response = await fetch(url);
      let responsData: T = await response.json();
      setData(responsData);
    }

    fetchData();
  }, [url]);

  return data;
};
