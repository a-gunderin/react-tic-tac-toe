export const getColumn = (num) => (num % 3 === 0 ? 3 : num % 3);

export const getRow = (num) => Math.ceil(num / 3);

export const calculateWinner = (squares) => {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const [a, b, c] of winningLines) {
    const sign = squares[a]?.sign;
    if (sign && sign === squares[b]?.sign && sign === squares[c]?.sign) {
      return { [sign]: [a, b, c] };
    }
  }
  return {};
};
