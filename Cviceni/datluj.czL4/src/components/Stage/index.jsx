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
  
  const Stage = () => {
    const [words, setWords] = useState(["jahoda", "klavesnice", "kolac"])
    /* const [mistakes, setMistakes] = useState(0) */
    const [evaulation, setEvaluation] = useState({
      mistakes: 0,
      rightWords: 0
    })
    const {mistakes, rightWords} = evaulation

    const handleFinish = () => {
      const copy = [...words]
      copy.splice(0,1) //Odstranění prvního elementu pole
      copy.splice(2, 0, generateWord().slice(0, 6)) //Generování nového elementu na poslední místo pole

      setWords(copy)
    }

    /* const handleMistake = () => {
      setMistakes(oldMistakes => oldMistakes + 1)
    } */
    const onEvaulation = (mistake, word) => {
      setEvaluation({...evaulation, mistakes: mistakes + mistake, rightWords: rightWords + word})
    }
  
    return (
      <div className="stage">
        <div className="stage__mistakes">Chyb: {mistakes} | Správných slov: {rightWords}</div>
        <div className="stage__words">
          {words.map((word, index) => <Wordbox key={word} word={word} onFinish={handleFinish} 
          active={index === 0 && true} evaluate={ () => onEvaulation(mistakes, rightWords)} />)}
        </div>
      </div>
    );
  };
  
  export default Stage;