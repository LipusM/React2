const c = console.log.bind(document)

import React, { useState, useEffect } from 'react';
import WordboxTime from '../WordboxTime';
import TimeShow from '../TimeShow';
import TimeButtons from '../TimeButtons';
import PlayerName from '../PlayerName';

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

    //Vyhodnocuje počet chyb, napsaných slov, zbývající čas, zda-li tlačítka jsou/nejsou aktivní
    const [evaluation, setEvaluation] = useState({
      mistakes: 0,
      writtenWords: 0,
      remaningTime: 0,
      activeButton: true,
    })
    const {mistakes, writtenWords, remaningTime, activeButton} = evaluation

    //Zobrazení a skrytí boxu s jménem hráče. Při prvním načtení komponenty skryto,
    const [submission, setSubmission] = useState(false)

    //Hodnoty času, na základě kterých bude vznikat tlačítko
    const chosenTime = [
      {
        textTime: "1 minuta",
        realTime: 60,
        },
        {
        textTime: "2 minuty",
        realTime: 120,
        },
        {
        textTime: "3 minuty",
        realTime: 180,
        }
    ]

    //Nastavení času hry
    /* const [timer, setTimer] = useState(0) */

    //Fce pro odstranění prvního slova po napsání a generování nového na konec
    const handleFinish = () => {
      const copy = [...words]
      copy.splice(0,1) //Odstranění prvního elementu pole
      copy.splice(2, 0, generateWord().slice(0, 6)) //Generování nového elementu na poslední místo pole

      setWords(copy)
    }

    //Vyhodnocuje počet chyb a napsaných slov
    const onEvaluation = (mistake, word) => {
      setEvaluation({...evaluation, mistakes: mistakes + mistake, writtenWords: writtenWords + word})
    }


    //Fce deaktivující tlačítka času po jeho spuštění
    const startTimer = (yourTime) => {
      setEvaluation({...evaluation, remaningTime: yourTime, activeButton: false})
    }

    //Fce resetující čas (resp. vrací do původního stavu)
    const restartTimer = () => {
      setEvaluation({...evaluation, remaningTime: 0, activeButton: true})
    }

    const [playerValue, setPlayerValue] = useState("")
    //Fce skrývající box s jménem hráče
    const playerName = (yourName) => {
      setSubmission(prev => !prev)
      setPlayerValue(yourName)
      c(playerValue)
    }

    useEffect(() => {
      let interval
      
      if(remaningTime > 0){
        interval = setInterval(() => {
          setEvaluation({...evaluation, remaningTime: remaningTime - 1}); // Odečítání 1 od iniciální hodnoty co 1s
        }, 1000);
      } else {
        setWords([generateWord().slice(0, 6), generateWord().slice(0, 6), generateWord().slice(0, 6)])
        setEvaluation({...evaluation, activeButton: true})
        playerName()
        /* setSubmission(prev => !prev) */
      }
      c(remaningTime)
  
      return () => clearInterval(interval) // Odpojení časovače

    }, [remaningTime])
    
  
    return (
      <div className="stage">
        <TimeButtons theTime={chosenTime} setYourTime={startTimer} makeActive={activeButton}/>
        <TimeShow timeLeft={remaningTime} restartTime={restartTimer}/>
        {/* <PlayerName appearComponent={false}/> */}
        {/* <PlayerName /> */}
        {submission && <PlayerName displaySubmission={playerName} inputValue={playerValue}/>}
        {/* {visibility && <PlayerName displaySubmission={playerName}/>} */}

        <div className="stage__words">
          {words.map((word, index) => <WordboxTime key={word} word={word} onFinish={handleFinish} 
          active={index === 0 && remaningTime !==0 && true} evaluate={onEvaluation} 
          firstWord={index === 0 && remaningTime > 0 ? "active-word" : "non-active-word"} timeLeft={remaningTime}/>)}
        </div>
      </div>
    );
  };
  
  export default StageTime;