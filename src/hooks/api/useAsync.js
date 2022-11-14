import { useEffect, useState } from 'react';

export default function useAsync(handler, immediate = true) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (immediate) {
      act();
    }
  }, []);

  const act = async (...args) => {
    setLoading(true);
    setError(null);

    try {
      const data = await handler(...args);
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
      throw error;
    }
  };

  return {
    data,
    loading,
    error,
    act,
  };
}
