import React, {useState} from "react";
import {FaArrowCircleRight} from 'react-icons/fa';

const Card = ({ words, cardMode }) => {
  const [reveal, setReveal] = useState(false);
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [remainingWords, setRemainingWords] = useState(words.slice());

  const setNewWord = () => {
    if (remainingWords.length === 1) {
      var allWords = words.slice();
      let newWord = remainingWords[0];
      setCurrentWord(newWord);
      setRemainingWords(words.slice());
      setReveal(false);
    } else {
      var allWords = remainingWords.slice();
      let newWord = allWords.pop();
      setCurrentWord(newWord);
      setRemainingWords(allWords);
      setReveal(false);
    }
  }

  const toggleReveal = (e) => {
    setReveal(prevReveal => !prevReveal);
  }

  return (
    <div>
      <div onClick={toggleReveal}>
        Click to reveal the definition...
        {reveal ? <p>{currentWord.definition}</p> : <p>{currentWord.name}</p>}
      </div>
      <div>
        <button onClick={setNewWord}><FaArrowCircleRight/></button>
      </div>

    </div>
  );
}

  export default Card;