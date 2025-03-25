import { useState } from "react";
import { Board } from "./components/Board";
import { buttonCls } from "./styles";
import { MoveList } from "./components/Moves/MoveList";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isAscending, setIsAscending] = useState(true);
  const currentSquares = history[currentMove];
  const nextPlayerSign = currentMove % 2 === 0 ? "X" : "O";

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  return (
    <div className="flex flex-wrap justify-center gap-7 mt-5">
      <Board
        nextPlayerSign={nextPlayerSign}
        squares={currentSquares}
        onPlay={handlePlay}
        isEndOfGame={currentMove === 9}
        step={currentMove + 1}
      />

      <div className="min-w-64">
        <div className="flex gap-2 mb-2">
          <button
            onClick={() => setIsAscending(!isAscending)}
            className={buttonCls}
          >
            Sort ⇵
          </button>
          <button
            onClick={() => {
              setCurrentMove(0);
              setHistory([Array(9).fill(null)]);
            }}
            className={buttonCls}
          >
            Clear history 🗑
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <MoveList
            history={history}
            currentMove={currentMove}
            setCurrentMove={setCurrentMove}
            isAscending={isAscending}
          />
        </div>
      </div>
    </div>
  );
};

export default Game;
