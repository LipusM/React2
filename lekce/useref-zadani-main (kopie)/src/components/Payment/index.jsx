import { useState } from 'react';

const Payment = () => {
  const [cardInputVisible, setCardIinputVisible] = useState(false);

  const handlePay = () => setCardIinputVisible(true);

  return (
    <div className="payment">
			<h2>Payment</h2>
      <button onClick={handlePay}>Zaplatit</button>
      {cardInputVisible ? <input type="text" /> : null}
    </div>
  );
};

export default Payment;