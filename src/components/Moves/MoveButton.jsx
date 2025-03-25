import { buttonCls } from "../../styles";

export const MoveButton = ({ index, description, setCurrentMove }) => (
  <button className={buttonCls} onClick={() => setCurrentMove(index)}>
    {description}
  </button>
);
