import { CurrentMoveIndicator } from "./CurrentMoveIndicator";
import { MoveButton } from "./MoveButton";

export const MoveList = ({
  history,
  currentMove,
  setCurrentMove,
  isAscending,
}) => {
  const moves = history.map((historyItem, index) => {
    const step = historyItem.find((i) => i?.step === index);
    const description =
      index > 0
        ? `Go to move # ${index} (row: ${step?.row}, col: ${step?.col})`
        : "Go to game start";

    return (
      <div key={index}>
        {index === currentMove ? (
          <CurrentMoveIndicator index={index} step={step} />
        ) : (
          <MoveButton
            index={index}
            description={description}
            setCurrentMove={setCurrentMove}
          />
        )}
      </div>
    );
  });

  return isAscending ? moves : moves.reverse();
};
