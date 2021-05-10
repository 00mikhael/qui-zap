import React from "react";

import Board from '../Board'
import Quiz from '../Quiz'
import Question from '../Question'

const StartButton = () => {
  return (
    <button className={`justify-self-end col-start-4 sm:col-start-3  border border-fuchsia-600 rounded text-fuchsia-600 max-w-min px-6 py-2 cursor-pointer hover:bg-fuchsia-700 hover:text-fuchsia-50 font-semibold`}>Start</button>
  );
}

const QuizTitleDescription = ({title, description, creator}) => {
  return (
    <div className={`flex flex-col space-y-2 col-start-2 col-end-5 sm:col-start-2 sm:col-end-3 row-start-4`}>
      <span className={`font-extrabold text-3xl text-fuchsia-700`}>{title}</span>
      <span className={`font-normal text-base text-fuchsia-600`}>{description}</span>
      <span className={`font-bold text-fuchsia-600 text-sm text-fuchsia-600 pt-6 items-end`}>{creator}</span>
    </div>
  );
}

const Playground = ({quiz}) => {
  return (
    <div className={`space-y-4`}>
      <Board className={`h-64`} left={<QuizTitleDescription title={quiz.quizName} description={quiz.quizDescription} creator={quiz.creator}
      />} right={<StartButton />} />
      <Quiz>
        <Question quizImage={quiz.quizImageUrl} question={quiz.quizQuestions[1]} />
      </Quiz>
    </div>
  );
};

export default Playground;
