import React from "react";

import styles from './Board.module.css'

const Board = ({className, left, right}) => {
  return (
    <div style={{display: "grid", gridTemplateColumns: "auto 1fr 1fr 20px", gridTemplateRows: "auto"}} className={`${className} ${styles.bg} bg-fuchsia-100 p-4 rounded-md shadow-md items-start gap-4`}>
      {left}
      {right}
    </div>
  );
};

export default Board;
