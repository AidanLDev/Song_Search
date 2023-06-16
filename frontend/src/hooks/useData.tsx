import { useEffect, useState } from 'react';
import { TrackObjectKeys, TrackObject } from '../components/Body';

export function useData(url: string) {
  const [data, setData] =
    useState<Record<TrackObjectKeys, TrackObject>>();

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
