const c = console.log.bind(document)

import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import './style.scss';

const Wordbox = ({ word, onFinish, active, onMistake }) => {

  const [lettersLeft, setLettersLeft] = useState(word)
  const [mistake, setMistake] = useState(false)

  //Fce smazavající písemna a nahrazující slovo po jeho napsání
  const handleWord = (e) => {
    if(e.key === lettersLeft){
      onFinish()

      active = true
    }
    else if(e.key === lettersLeft[0]){
      setLettersLeft(prev => prev.slice(1))
      setMistake(false)

      active = true
    } else {
      setMistake(true)

      active = false
      onMistake()
    }
  }
  
  //Event listener na keyup
  useEffect(() => {
    if(active){
      document.addEventListener("keyup", handleWord)
      
      return () => document.removeEventListener("keyup", handleWord) 
    }

  }, [lettersLeft, active, onMistake])
  


  return (
    <div className={classnames("wordbox", {"wordbox--mistake": mistake})} >
      {lettersLeft}
    </div>
  )

}

export default Wordbox;