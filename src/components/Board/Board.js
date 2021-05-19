import React from "react";

import styles from './Board.module.css'

const Board = ({left, right}) => {
  return (
    <div className={`${styles.filter}`}>
      <div style={{display: "grid", gridTemplateColumns: "auto 1fr auto", gridTemplateRows: "auto", height: "400px"}} className={` ${styles.bg} items-start gap-4 bg-fuchsia-200 rounded-bl-3xl`}>
        {left}
        {right}
      </div>
    </div>
  );
};

export default Board;
