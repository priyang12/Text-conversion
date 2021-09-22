import axios from 'axios';
import { useEffect, useState } from 'react';
export const useFetch = (url) => {
  const [loading, setloading] = useState(false);
  const [phase, setphase] = useState({
    translated: 'Lost a planet,  master obiwan has.',
    text: 'Master Obiwan has lost a planet.',
    translation: 'yoda',
  });
  const [err, seterr] = useState(null);

  useEffect(() => {
    setloading(true);
    try {
      const res = axios.get(url);
      res.then((data) => {
        setphase(data.data.contents);
      });
      seterr(null);
    } catch (error) {
      console.log(error.response);
      const er = error.response?.massge || 'Server Error';
      seterr(er);
      setphase(null);
    } finally {
      setloading(false);
    }
  }, [url]);
  return { loading, phase, err };
};
