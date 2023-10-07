const c = console.log.bind(document)

import { useEffect, useState } from 'react';

const Offline = () => {

  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    c("mounted")

    return () => {
      c("unmounted")
    }

  }, [])


  useEffect(() => {

    const handleOffline = () => {
      c("Funkce handleOffline")
      setIsOnline(false)
    }
    window.addEventListener('offline', handleOffline)

    const handleOnline = () => {
      c("Funke handleOnline")
      setIsOnline(true)
    }
    window.addEventListener('online', handleOnline)

    return () => {
      window.removeEventListener("offline", handleOffline)
      window.removeEventListener("online", handleOnline)
    }

  }, [isOnline])


  if (isOnline) {
    return (
      <p>Všechno v pořádku</p>
    )
  }

  return (
    <p>Jste offline!</p>
  )
  
}

export default Offline;