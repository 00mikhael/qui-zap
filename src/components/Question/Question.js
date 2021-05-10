import React from "react";

import QuestionImage from '../QuestionImage'

const QuestionOptions = ({children}) => {
  return (
    <div className={` col-span-full md:col-start-3 md:col-end-5 md:row-start-2 text-base justify-self-center flex flex-col justify-center md:justify-self-end w-full`}>
      {children}
    </div>
  )
}

const Option = ({option}) => {
  return (
    <div className={`bg-white rounded-tr-lg rounded-bl-lg text-base text-gray-700 border-l-8 border-fuchsia-300 p-4 mb-4 w-auto min-w-full shadow hover:shadow-md cursor-pointer`}>{option}</div>
  );
}

const Question = ({quizImage, question}) => {
  return (
    <>
      <div className={`col-start-2 col-end-4 row-span-1 mb-8 text-center text-gray-700 w-full`}>
        {question.question}
      </div>
      <QuestionImage questionImage={question.questionImageUrl} quizImage={quizImage} />
      <QuestionOptions>
        {question.questionOptions.map(option => (
          <Option option={option} />
        ))}
      </QuestionOptions>
     </>
  );
};

export default Question;
