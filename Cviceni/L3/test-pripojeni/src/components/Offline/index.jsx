const c = console.log.bind(document)

import { useEffect, useState } from 'react';

const Offline = () => {

  const [isOnline, setIsOnline] = useState(navigator.onLine);

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