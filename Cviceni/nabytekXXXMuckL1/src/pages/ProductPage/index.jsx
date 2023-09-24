const c = console.log.bind(document);

import "./style.scss";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader";

const ProductPage = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    setLoading(true);

    fetch(`https://apps.kodim.cz/react-2/xxxmuck/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProductInfo(data);
        setLoading(false);
      });
  }, []);

  return (
    <main className="chosenProduct">
      {loading ? 
      <div id="loader">
        <Loader />
      </div>
       : 
        <>
          <div className="productImage">
            <img src={productInfo.image} alt={productInfo.name} />
          </div>
          <div className="productInfo">
            <h2>{productInfo.name}</h2>
            <button>Objednat</button>
          </div>
        </>
      }
    </main>
  );
};

export default ProductPage;
