import "./App.css";
import useWordGame from "./hooks/useWordGame";

function App() {
  const {
    text,
    handleChange,
    startGame,
    textareaRef,
    timeRemaining,
    startClock,
    wordCount,
    showTime,
  } = useWordGame();

  return (
    <div className="container">
      <h1>how fast do you type?</h1>
      <textarea
        value={text}
        onChange={handleChange}
        disabled={!startGame}
        ref={textareaRef}
      />
      <h4>{showTime(timeRemaining)}</h4>
      <button disabled={startGame} onClick={startClock}>
        START
      </button>
      <h4>word count: {wordCount}</h4>
    </div>
  );
}

export default App;
