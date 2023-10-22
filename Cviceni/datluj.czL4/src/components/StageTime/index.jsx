const c = console.log.bind(document)

import React, { useState, useEffect } from 'react';
import WordboxTime from '../WordboxTime';
import wordList from '../../word-list';

import './style.scss'

const generateWord = (size) => {
    const sizeIndex = size === undefined
      ? Math.floor(Math.random() * wordList.length)
      : size - 3;
    
    if (sizeIndex < 0 || sizeIndex >= wordList.length) {
      return null;
    }
    
    const words = wordList[sizeIndex];
    const wordIndex = Math.floor(Math.random() * words.length);
    return words[wordIndex];
  };
  
  /**********Fce nastavující slova, počítající chyby a počet nap. slov, generující nová slova**********/
  const StageTime = () => {
    //Iniciální nastavení slov
    const [words, setWords] = useState([generateWord().slice(0, 6), generateWord().slice(0, 6), generateWord().slice(0, 6)])

    //Vyhodnocování psaní, počet chyb a napsaných slov. 
    const [evaulation, setEvaluation] = useState({
      mistakes: 0,
      writtenWords: 0,
    })
    const {mistakes, writtenWords} = evaulation

    //Nastavení času hry
    const [timer, setTimer] = useState(0)

    //Odstranění prvního slova po napsání a generování nového na konec
    const handleFinish = () => {
      const copy = [...words]
      copy.splice(0,1) //Odstranění prvního elementu pole
      copy.splice(2, 0, generateWord().slice(0, 6)) //Generování nového elementu na poslední místo pole

      setWords(copy)
    }

    //Vyhodnocuje počet chyb a napsaných slov
    const onEvaulation = (mistake, word) => {
      setEvaluation({...evaulation, mistakes: mistakes + mistake, writtenWords: writtenWords + word})
    }

    //Spuštění časovače
    useEffect(() => {
      let interval
      // Nastavit interval, který zvyšuje stav `count` každou sekundu
      if(timer > 0){
        interval = setInterval(() => {
          setTimer(prevCount => prevCount - 1);
        }, 1000);
      }
      c(timer)
  
      // Odpojení časovače
      return () => {
        clearInterval(interval);
      }

    }, [timer])
    
  
    return (
      <div className="stage">
        <div className="stage__time">
            <button className="stage-time-selection" onClick={() => setTimer(60)}>1 minuta</button>
            |
            <button className="stage-time-selection" onClick={() => setTimer(120)}>2 minuty</button>
            |
            <button className="stage-time-selection" onClick={() => setTimer(180)}>3 minuty</button>
        </div>
        <div className="stage__words">
          {words.map((word, index) => <WordboxTime key={word} word={word} onFinish={handleFinish} 
          active={index === 0 && timer !==0 && true} evaluate={onEvaulation} 
          firstWord={index === 0 && timer > 0 ? "active-word" : "non-active-word"} timeLeft={timer}/>)}
        </div>
      </div>
    );
  };
  
  export default StageTime;