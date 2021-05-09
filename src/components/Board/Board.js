import React from "react";



const Board = ({left, right}) => {
  return (
    <div style={{display: "grid", gridTemplateColumns: "auto 1fr 1fr 20px", gridTemplateRows: "auto"}} className={`bg-fuchsia-100 p-4 rounded-md shadow-md items-start gap-4`}>
      {left}
      {right}
    </div>
  );
};

export default Board;
