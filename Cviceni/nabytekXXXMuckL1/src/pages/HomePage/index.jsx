const c = console.log.bind(document);

import { useEffect, useState } from "react";

import "./style.scss";

import Products from "../Products";

const HomePage = () => {

  const [pageData, setPageData] = useState([])  

  useEffect(() => {

    fetch(`https://apps.kodim.cz/react-2/xxxmuck/products`)
      .then((response) => response.json())
      .then((data) => 
        setPageData(data)
      )
  }, [])

  return (
    <main>
      <h2>Aktuální nabídka</h2>
      <p>
        Nejnovější prémiové produkty od předních českých designerů. <br />
        Doprava zdarma až k vám domů, na cenu nehleďte.
      </p>
      <Products props={pageData}/>
    </main>
  );
};

export default HomePage;
