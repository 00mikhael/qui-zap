import React from "react";

const Quiz = ({children}) => {
  return (
    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "auto auto"}} className={` rounded-md justify-center md:justify-between p-6 max-w-6xl mx-auto`}>
      {children}
    </div>
  );
};

export default Quiz;
