import axios from 'axios';
import { useEffect, useState } from 'react';
import { RSSResponse } from './useRSS';

export const useFetch = (url: string) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown | null>(null);
  const [data, setData] = useState<null | RSSResponse>(null);
  useEffect(() => {
    setLoading(true);
    setError(null);
    (async () => {
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, loading, error };
};
