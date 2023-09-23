const c = console.log.bind(document);

import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import "./style.scss";

import Products from "../Products";
import Loader from "../../components/Loader";

const HomePage = () => {

  const [loading, setLoading] = useState(true)
  const [pageData, setPageData] = useState([])  

  useEffect(() => {

    setLoading(true)

    fetch(`https://apps.kodim.cz/react-2/xxxmuck/products`)
      .then((response) => response.json())
      .then((data) => {
        setPageData(data)

        setLoading(false)
      })
  }, [])

  return (
    <main>
      <h2>Aktuální nabídka</h2>
      <p>
        Nejnovější prémiové produkty od předních českých designerů. <br />
        Doprava zdarma až k vám domů, na cenu nehleďte.
      </p>

      {loading ? <Loader/> :  <Products props={pageData}/>}
      <Outlet />
    </main>
  );
};

export default HomePage;
