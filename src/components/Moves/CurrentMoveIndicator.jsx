import { currentMoveCls } from "../../styles";

export const CurrentMoveIndicator = ({ index, step }) => (
  <div className={currentMoveCls}>
    {index === 0
      ? "You are at the game start!"
      : `You are at move #${index} ${
          step?.row ? `(row: ${step.row}, col: ${step.col})` : ""
        }`}
  </div>
);
