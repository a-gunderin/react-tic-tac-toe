import { useState } from "react";
import { Board } from "./components/Board";
import { buttonCls } from "./styles";
import { MoveList } from "./components/Moves/MoveList";
import { useTranslation } from "react-i18next";

const Game = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
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

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    setLanguage(selectedLanguage);
    localStorage.setItem("i18nextLng", selectedLanguage);
  };

  return (
    <div className="flex flex-wrap justify-center gap-7 mt-5">
      <div>
        <label className="flex items-center gap-2 mb-2">
          <span className="cursor-pointer">{t("chooseLanguage")}:</span>

          <select
            name="lang"
            id="lang"
            className="border border-solid border-gray-400 p-1 cursor-pointer rounded"
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="en">English</option>
            <option value="ru">Русский</option>
            <option value="uk">Українська</option>
            <option value="es">Español</option>
          </select>
        </label>

        <Board
          nextPlayerSign={nextPlayerSign}
          squares={currentSquares}
          onPlay={handlePlay}
          isEndOfGame={currentMove === 9}
          step={currentMove + 1}
        />
      </div>

      <div>
        <div className="flex gap-2 mb-2">
          <button
            onClick={() => setIsAscending(!isAscending)}
            className={buttonCls}
          >
            {t("sort")} ⇵
          </button>
          <button
            onClick={() => {
              setCurrentMove(0);
              setHistory([Array(9).fill(null)]);
            }}
            className={buttonCls}
          >
            {t("clearHistory")} 🗑
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
