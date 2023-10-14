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

    const handleFinish = () => {
      const copy = [...words]
      copy.splice(0,1)
      copy.splice(2, 0, generateWord().slice(0, 6))

      setWords(copy)
    }
  
    return (
      <div className="stage">
        <div className="stage__mistakes">Chyb: 0</div>
        <div className="stage__words">
          {words.map((word, index) => <Wordbox key={word} word={word} onFinish={handleFinish} active={index === 0 && true}/>)}
        </div>
      </div>
    );
  };
  
  export default Stage;