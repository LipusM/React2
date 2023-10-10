const c = console.log.bind(document);

import { useState, useEffect } from "react";

const Casovac = () => {
  const [count, setCount] = useState(0);

  /* const handleTimer = (e) => {
      setCount(prev => prev + 1)
    } */

  /* const handleTimer = (e) => {
        setCount(count + 1)
      } */

  /* useEffect(() => {
      const timerId = window.setInterval(handleTimer, 1000)
      return () => window.clearInterval(timerId)
    }, []) */

  useEffect(() => {
    const handleTimer = (e) => {
      setCount((oldCount) => oldCount + 1)
    }

    const timerId = window.setInterval(handleTimer, 1000)
    return () => window.clearInterval(timerId)
  }, [count])

  const handleClick = () => {
    setCount(count + 1);
  };

  return <button onClick={handleClick}>Počet: {count}</button>;
};

export default Casovac;
