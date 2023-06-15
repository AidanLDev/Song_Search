import { useEffect, useState } from 'react';

export function useData(url: string) {
  const [data, setData] = useState<Promise<any>>(null);

  useEffect(() => {
    let ignore = false;

    fetch(url)
      .then(res => {
        return res.text();
      })
      .then(json => {
        if (!ignore) {
          const jsonObject = JSON.parse(json);
          setData(jsonObject);
        }
      });
    return () => {
      ignore = true;
    };
  }, [url]);

  return data;
}
