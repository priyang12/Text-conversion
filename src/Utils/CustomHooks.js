import { useEffect, useState } from 'react';
import axios from 'axios';

export const useFetch = (url) => {
  const [loading, setloading] = useState(false);
  const [phase, setphase] = useState(null);
  const [err, seterr] = useState(null);

  useEffect(() => {
    let fetchData = async () => {
      try {
        setloading(true);
        const { data } = await axios.get(
          'https://api.funtranslations.com/translate' + url
        );
        setphase(data?.contents);
        seterr(null);
      } catch (error) {
        const er = error.response?.massge || 'Server Error';
        seterr(er);
        setphase(null);
      } finally {
        setloading(false);
      }
    };
    fetchData();
  }, [url]);

  return { loading, phase, err };
};
