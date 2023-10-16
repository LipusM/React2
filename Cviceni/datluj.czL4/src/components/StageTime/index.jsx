const c = console.log.bind(document)

import React, { useState, useEffect } from 'react';
import Wordbox from '../Wordbox';
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
    const [words, setWords] = useState(["jahoda", "klavesnice", "kolac"])

    const [evaulation, setEvaluation] = useState({
      mistakes: 0,
      writtenWords: 0
    })
    const {mistakes, writtenWords} = evaulation

    const handleFinish = () => {
      const copy = [...words]
      copy.splice(0,1) //Odstranění prvního elementu pole
      copy.splice(2, 0, generateWord().slice(0, 6)) //Generování nového elementu na poslední místo pole

      setWords(copy)
    }

    const onEvaulation = (mistake, word) => {
      setEvaluation({...evaulation, mistakes: mistakes + mistake, writtenWords: writtenWords + word})
    }
  
    return (
      <div className="stage">
        <div className="stage__time">
            <div>1 minuta</div>
            |
            <div>2 minuty</div>
            |
            <div>5 minut</div>
        </div>
        <div className="stage__words">
          {words.map((word, index) => <Wordbox key={word} word={word} onFinish={handleFinish} 
          active={index === 0 && true} evaluate={onEvaulation} firstWord={index === 0 ? "active-word" : "non-active-word"}/>)}
        </div>
      </div>
    );
  };
  
  export default StageTime;