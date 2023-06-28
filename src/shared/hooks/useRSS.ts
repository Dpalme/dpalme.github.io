import axios from 'axios';
import { useEffect, useState } from 'react';

const apiURL = 'https://api.rss2json.com/v1/api.json';

export type RSSResponseItem = {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: object;
  categories: object;
  loading?: boolean;
};

export type RSSResponse = {
  status: string;
  items: [RSSResponseItem];
  feed: {
    url: string;
    title: string;
    link: string;
    author: string;
    description: string;
    image: string;
  };
};

const getData = async (url: string, limit: number) =>
  (
    await axios.get(
      `${apiURL}?rss_url=${encodeURIComponent(url)}&api_key=${
        import.meta.env.VITE_RSS_JSON_KEY
      }&limit=${limit}`
    )
  ).data;

export const useRSS = (url: string, limit = 6) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown | null>(null);
  const [data, setData] = useState<null | RSSResponse>(null);
  useEffect(() => {
    setLoading(true);
    setError(null);
    (async () => {
      try {
        const data = await getData(url, limit);
        setData(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, loading, error };
};
