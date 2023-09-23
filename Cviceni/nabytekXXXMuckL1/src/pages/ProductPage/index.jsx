const c = console.log.bind(document);

import "./style.scss";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader";

const ProductPage = () => {
  const { id } = useParams();

  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    fetch(`https://apps.kodim.cz/react-2/xxxmuck/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProductInfo(data));
  }, []);

  return (
    <div className="chosenProduct">
      <div className="productImage">
        <img src={productInfo.image} alt={productInfo.name} />
      </div>
      <div className="productInfo">
        <h2>{productInfo.name}</h2>
        <button>Objednat</button>
      </div>
    </div>
  );
};

export default ProductPage;

