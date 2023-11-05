import { useEffect, useRef } from 'react';

const ExchangeRate = ({ currency, rate }) => {

  const prevRate = useRef() //Proměnná pro ukládání průběžné

  useEffect(() => {
      prevRate.current = rate
  }, [rate])

  return (
    <div>
      Průběžný kurz {currency}: {rate}
      {prevRate.current < rate ? ' ⇑' : ' ⇓'}
    </div>
  )
};

export default ExchangeRate;