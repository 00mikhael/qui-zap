import React from "react";


const QuizList = ({children}) => {
  return (
    <div className={`px-0 pb-4`}>
      <span className={`flex flex-wrap gap-4 space-x-1 `}>
      {children}
      </span>
    </div>
  );
};

export default QuizList;
