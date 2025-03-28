import { currentMoveCls } from "../../styles";
import { useTranslation } from "react-i18next";

export const CurrentMoveIndicator = ({ index, step }) => {
  const { t } = useTranslation();

  return (
    <div className={currentMoveCls}>
      {index === 0
        ? t("youAreAtGameStart")
        : `${t("youAreAtMove")} #${index} ${
            step?.row
              ? `(${t("row")}: ${step.row}, ${t("col")}: ${step.col})`
              : ""
          }`}
    </div>
  );
};
