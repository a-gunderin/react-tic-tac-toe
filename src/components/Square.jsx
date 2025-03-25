export const Square = ({ value, onSquareClick, isWinning }) => {
  const mainCls = "w-20 h-20 font-bold text-5xl font-sans";
  const borderCls = "border-2 border-solid border-gray-400 hover:border-black";
  const winningCls = isWinning ? "text-green-600" : "";

  return (
    <button
      className={`${mainCls} ${borderCls} ${winningCls}`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};
