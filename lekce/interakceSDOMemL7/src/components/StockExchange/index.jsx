import { useState, useEffect } from 'react';
import ExchangeRate from '../ExchangeRate';

/* const startGenerator = (callback) => {
  setInterval(() => {
    let rate = 25;
    for (let i = 0; i < 100; i++) {
      rate += (Math.random() / 100);
    }

    callback(Math.round(rate * 100) / 100);
  }, 1000);
}; */


const StockExchange = () => {
	const [rate, setRate] = useState(25);

	useEffect(() => {
		const intId = setInterval(() => {
			let rate = 25;
			for (let i = 0; i < 100; i++) {
				rate += (Math.random() / 100);
			}

			setRate(Math.round(rate * 100) / 100);
		}, 1000);

		return () => {
			clearInterval(intId);
		}
	}, [])


  return (
    <div className="stock-exchange">
			<h2>Stock exchange</h2>
			<ExchangeRate currency="USD" rate={rate} />
    </div>
  );
}

export default StockExchange;