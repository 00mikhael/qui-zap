import React from "react";



const QuizList = ({children}) => {
  return (
    <div className={`px-2 pb-4`}>
      <span className={`flex flex-wrap gap-4`}>
      {children}
      </span>
    </div>
  );
};

export default QuizList;
