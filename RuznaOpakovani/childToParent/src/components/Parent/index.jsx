const c = console.log.bind(document);

import "./style.scss"
import { useState } from "react";

import Child from "../Child";

const Parent = () => {

    const [word, setWord] = useState("Parent")

    const changeTitle = (newName) => {
        setWord(newName)
    }

  return (
    <section>
      <div className="parent">
        <h1>{word}</h1>
        {/* <Child changeWord={word => setWord(word)}/> */}
        <Child changeWord={changeTitle}/>
      </div>
    </section>
  )
}

export default Parent;
