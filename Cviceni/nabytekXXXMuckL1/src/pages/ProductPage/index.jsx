const c = console.log.bind(document);

import "./style.scss";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductPage = () => {

  const { id } = useParams();  

  const [productInfo, setProductInfo] = useState({})  

  useEffect(() => {
    fetch(`https://apps.kodim.cz/react-2/xxxmuck/products/${id}`)
    .then(response => response.json())
    .then(data => 
        setProductInfo(data)
    )
  }, [])

  return (
    <div>
            <h2>{productInfo.name}</h2>
          <img src={productInfo.image} alt={productInfo.name} />
    </div>
  );
};

export default ProductPage;
