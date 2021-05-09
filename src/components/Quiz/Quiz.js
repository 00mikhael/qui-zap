import React from "react";

const Quiz = ({children}) => {
  return (
    <div style={{display: "grid", gridTemplateColumns: "0 auto auto 0", gridTemplateRows: "auto auto"}} className={` rounded-md justify-center md:justify-between p-6`}>
      {children}
    </div>
  );
};

export default Quiz;
