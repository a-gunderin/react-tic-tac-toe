import { calculateWinner, getColumn, getRow } from "../utils/utils";
import { Square } from "./Square";

export const Board = ({
  nextPlayerSign,
  squares,
  onPlay,
  isEndOfGame,
  step,
}) => {
  const [[winner, winningLines] = [null, []]] = Object.entries(
    calculateWinner(squares)
  );

  const status = winner
    ? `Winner: ${winner}`
    : isEndOfGame
    ? `Draw`
    : `Next player: ${nextPlayerSign}`;

  const handleClick = (i) => {
    if (squares[i] || winner) return;
    const nextSquares = [...squares];
    nextSquares[i] = {
      sign: nextPlayerSign,
      row: getRow(i + 1),
      col: getColumn(i + 1),
      step: step,
    };
    onPlay(nextSquares);
  };

  return (
    <>
      <div className="mb-2">{status}</div>

      <div className="grid grid-cols-3 grid-rows-3 gap-0.5">
        {Array(9)
          .fill(null)
          .map((_, index) => (
            <Square
              key={index}
              value={squares[index]?.sign}
              onSquareClick={() => handleClick(index)}
              isWinning={winningLines.includes(index)}
            />
          ))}
      </div>
    </>
  );
};
