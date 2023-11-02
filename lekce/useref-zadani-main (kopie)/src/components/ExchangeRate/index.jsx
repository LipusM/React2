import { useEffect, useRef } from 'react';

const ExchangeRate = ({ currency, rate }) => {

  return (
    <div>
      Průběžný kurz {currency}: {rate}
      {true ? ' ⇑' : ' ⇓'}
    </div>
  )
};

export default ExchangeRate;