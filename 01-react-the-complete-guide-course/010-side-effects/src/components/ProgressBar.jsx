import { useState, useEffect } from 'react';

export default function ProgressBar({ timer }) {
  const [remaintingTime, setRemaintingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaintingTime(prevTime => prevTime - 10)
    }, 10);

    return () => {
      clearInterval(interval);
    }
  }, [])


  return <progress value={remaintingTime} max={timer} />
}
