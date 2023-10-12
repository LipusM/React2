const c = console.log.bind(document)

import { useState, useEffect } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
  
    const handleKeyUp = (e) => {
        e.preventDefault()

      if (e.code === 'Space') {
          c("Space")
        setCount(prevState => prevState + 1)
      }
    }
  
    useEffect(() => {
      document.addEventListener('keyup', handleKeyUp);
      return () => document.removeEventListener('keyup', handleKeyUp)
    }, [count])
  
    const handleClick = () => {
      setCount(prevState => prevState + 1)
    }
  
    return (
      <button onClick={handleClick}>Počet: {count}</button>
    )

  }

export default Counter;
