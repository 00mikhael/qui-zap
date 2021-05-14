import React from "react";


import Board from '../Board'
import QuizList from '../QuizList'
import QuizItem from '../QuizItem'
import QuizAdd from '../QuizAdd'



const HomePage = ({quizList, onAction}) => {
  return (
    <>
      <Board left={<AppTitle/>} right={<AppDescription />} />
      <QuizList>
        {quizList.map(quizItem => (
          <QuizItem onAction={() => onAction(quizItem)} key={quizItem._id} showName={true} quiz={quizItem} />
        ))}
        <QuizAdd />
      </QuizList>
    </>
  );
};

const AppTitle = () => {
  return (
    <span style={{writingMode: "vertical-rl", textOrientation: "upright"}} className={`welcome space-y-4 text-2xl sm:text-4xl font-extrabold  p-4 col-start-1 col-end-2 row-start-1 h-full text-center`}>
      <span className={`border-2 rounded-bl-2xl rounded-t-2xl border-fuchsia-600 px-2 py-1 bg-fuchsia-700 text-white text-xl font-sans font-bold shadow-inner`}>QUI</span>
      <span className={`text-fuchsia-700`}>ZAP</span>
    </span>
  );
};

const AppDescription = () => {
  return (
    <p style={{minHeight: '100px'}} className={` lg:self-start col-start-2 col-end-5  sm:col-start-3 sm:col-end-4 row-start-1 p-4  text-fuchsia-600 text-xs md:text-sm max-w-xl bg-fuchsia-300 rounded-md shadow-inner`}>{`State of the art quizing app, been referred to as the uber of quiz apps. Very easy to use just pick a quiz and answer the same questions over and over again. Currently working on securing our first round of funding as you read this.`}</p>
  );
};

export default HomePage;
