import { useState, useRef, useEffect } from 'react';

const Payment = () => {
  const [cardInputVisible, setCardIinputVisible] = useState(false);
  const cardInputRef = useRef() //Založím si proměnnou. React vytvoří referenci resp. odkaz který uloží do té proměnné. Uloží se tam objekt
  

  const handlePay = () => setCardIinputVisible(!cardInputVisible);

  useEffect(() => {
    if(cardInputVisible){
      cardInputRef.current.focus()
    }
  }, [cardInputVisible])

  return (
    <div className="payment">
			<h2>Payment</h2>
      <button onClick={handlePay}>Zaplatit</button>
      {cardInputVisible ? <input type="text"  ref={cardInputRef}/> : null}
    </div>
  );
};

export default Payment;