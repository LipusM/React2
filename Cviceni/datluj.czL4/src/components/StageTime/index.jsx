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
  
  const StageTime = () => {
    //Iniciální nastavení slov
    const [words, setWords] = useState(["jahoda", "klavesnice", "kolac"])

    //Vyhodnocování psaní
    const [evaulation, setEvaluation] = useState({
      mistakes: 0,
      writtenWords: 0
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

      if(timer !== 0){
        startGame(timer)
      }

    }, [timer])

    const startGame = (chosenTime) => {
      setTimer(chosenTime)

     /*  if(chosenTime === 60){
        c("jedna minuta")
      } else if (chosenTime === 120){
        c("dvě minuty")
      } else if (chosenTime === 300) {
        c("pět minut")
      } */
    
      if(chosenTime === 60){
        const start = setInterval( (() => setTimer(prev => {
          c(timer)
          if(timer === 0){
            clearInterval(start) 
          }
            prev - 1
        })), 1000 )
      }

    }

    const gameTime = (chosenTime) => {
      setTimer(chosenTime => chosenTime - 1) 
      c(timer)
    }
  
    return (
      <div className="stage">
        <div className="stage__time">
            <div onClick={() => setTimer(60)}>1 minuta</div>
            |
            <div onClick={() => setTimer(120)}>2 minuty</div>
            |
            <div onClick={() => setTimer(300)}>5 minut</div>
        </div>
        <div className="stage__words">
          {words.map((word, index) => <WordboxTime key={word} word={word} onFinish={handleFinish} 
          active={index === 0 && true} evaluate={onEvaulation} firstWord={index === 0 ? "active-word" : "non-active-word"}/>)}
        </div>
      </div>
    );
  };
  
  export default StageTime;