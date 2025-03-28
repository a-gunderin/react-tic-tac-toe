import { CurrentMoveIndicator } from "./CurrentMoveIndicator";
import { MoveButton } from "./MoveButton";
import { useTranslation } from "react-i18next";

export const MoveList = ({
  history,
  currentMove,
  setCurrentMove,
  isAscending,
}) => {
  const { t } = useTranslation();
  const moves = history.map((historyItem, index) => {
    const step = historyItem.find((i) => i?.step === index);
    const description =
      index > 0
        ? `${t("goToMove")} # ${index} (${t("row")}: ${step?.row}, ${t(
            "col"
          )}: ${step?.col})`
        : t("goToGameStart");

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
