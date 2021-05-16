import React from "react";


const QuizList = ({children}) => {
  return (
    <div>
      <span className={`flex flex-row-reverse flex-wrap-reverse gap-4 space-y-4 sm:space-y-0 m-4 mb-0 justify-center`}>
      {children}
      </span>
    </div>
  );
};

export default QuizList;
