const c = console.log.bind(document)

import { useState, useEffect } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);

    const handleKeyUp = (e) => {
      if (e.code === 'Space') {
        setCount(prev => prev + 1);
      }
    };    
  
    useEffect(() => {
      document.addEventListener('keypress', handleKeyUp);
      return () => document.removeEventListener('keypress', handleKeyUp);
    }, [count]);
  

    const handleClick = () => {
      setCount(prev => prev + 1)
    }
  
    return (
      <button onClick={handleClick}>Počet: {count}</button>
    )
  }

  export default Counter