import { useEffect, useRef, useState } from "react";

const useWordGame = () => {
  const STARTING_TIME = 5;

  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [startGame, setStartGame] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  const textareaRef = useRef(null);

  useEffect(() => {
    if (startGame && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, startGame]);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(/\s+/);
    const filteredWords = wordsArr.filter((word) => word !== "");
    return filteredWords.length;
  }

  function startClock() {
    setStartGame(true);
    setTimeRemaining(STARTING_TIME);
    setText("");
    setWordCount(0);
    textareaRef.current.disabled = false;
    textareaRef.current.focus();
  }

  function endGame() {
    setStartGame(false);
    setWordCount(calculateWordCount(text));
  }

  function showTime(timeRemaining) {
    return timeRemaining === 0 ? (
      <span className="red">times out</span>
    ) : (
      `time remaining: ${timeRemaining}`
    );
  }
  return {
    text,
    startGame,
    textareaRef,
    timeRemaining,
    wordCount,
    handleChange,
    startClock,
    showTime,
  };
};

export default useWordGame;
