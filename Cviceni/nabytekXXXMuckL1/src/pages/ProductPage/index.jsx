const c = console.log.bind(document);

import "./style.scss";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductPage = () => {

  const [productInfo, setProductInfo] = useState()  
    
  const { id } = useParams();

/*   fetch(`https://apps.kodim.cz/react-2/xxxmuck/products/${Number(id)}`)
  .then(response => response.json())
  .then(data => setProductInfo(data)) */

  return (
    <div>
        Ahoj světe!
    </div>
  );
};

export default ProductPage;
