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
      c(`1: Hodnota prop active: ${active}`)
    }
    else if(e.key === lettersLeft[0]){
      setLettersLeft( prev => prev.slice(1))
      setMistake(false)

      active = true
      c(`2: Hodnota prop active: ${active}`)
    } else {
      setMistake(true)

      active = false
      onMistake()
      c(`3: Hodnota prop active: ${active}`)
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