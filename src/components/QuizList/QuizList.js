import React from "react";


const QuizList = ({children}) => {
  return (
    <div>
      <span className={`flex flex-row-reverse flex-wrap-reverse gap-4 space-x-1 justify-center `}>
      {children}
      </span>
    </div>
  );
};

export default QuizList;
