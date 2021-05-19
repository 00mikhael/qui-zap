import React from "react";

import QuestionImage from '../QuestionImage'

const Question = ({quizImage, question, onAnswerSelected, selectedOption, answerStatus}) => {
  return (
    <>
      <div className={`col-start-2 col-end-4 row-span-1 mb-8 text-center text-gray-700 w-full`}>
        {question.question}
      </div>
      <QuestionImage questionImage={question.imageUrl} quizImage={quizImage} />
      <QuestionOptions>
        {question.options.map(option => (
          // <Option
          // key={option._id}
          // option={option}
          // isSelected={selectedOption?.value === option.value}
          // answerStatus={answerStatus}
          // onAction={() => onAnswerSelected(question, option)}/>
          <Option
          key={option._id}
          option={option}
          />
        ))}
      </QuestionOptions>
     </>
  );
};

const QuestionOptions = ({children}) => {
  return (
    <div className={` col-span-full md:col-start-3 md:col-end-5 md:row-start-2 text-base justify-self-center md:justify-self-end flex flex-col justify-center items-center md:items-end w-full`}>
      {children}
    </div>
  )
}

const Option = ({option, isSelected, answerStatus, onAction}) => {

  // const highlight = () => {
  //   if (isSelected) {
  //     const mapping = {
  //       'not answered': 'bg-white',
  //       'correct': 'bg-green-300',
  //       'wrong': 'bg-red-300'
  //     }
  //     return mapping[answerStatus]
  //   }
  //   return 'bg-white'
  // }

  // return (
  //   <div onClick={onAction} className={`${highlight()} w-full md:w-11/12  rounded-tr-lg rounded-bl-lg text-base text-gray-700 border-l-8 border-fuchsia-300 p-4 mb-4 shadow hover:shadow-md cursor-pointer`}>{option.value}</div>
  // );
  return (
    <div className={`w-full md:w-11/12  rounded-tr-lg rounded-bl-lg text-base text-gray-700 border-l-8 border-fuchsia-300 p-4 mb-4 shadow hover:shadow-md cursor-pointer`}>{option.value}</div>
  );
}

export default Question;
