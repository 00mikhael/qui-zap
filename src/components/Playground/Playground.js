import React from "react";

import Board from '../Board'
import Quiz from '../Quiz'

import styles from './Playground.module.css'
import image from '../../assets/img/pic.jpg'

const StartButton = () => {
  return (
    <button className={`justify-self-start sm:justify-self-end col-start-2 sm:col-start-3 sm:col-end-4 border border-fuchsia-600 rounded text-fuchsia-600 max-w-min px-6 py-2 cursor-pointer hover:bg-fuchsia-700 hover:text-fuchsia-50 font-semibold`}>Start</button>
  );
}

const QuizTitleDescription = () => {
  return (
    <div className={`flex flex-col space-y-2 col-start-2 col-end-5 sm:col-start-2 sm:col-end-3`}>
      <span className={`font-extrabold text-3xl text-fuchsia-600`}>Author Quiz</span>
      <span className={`font-normal text-base text-fuchsia-500`}>Select a book written by the author.</span>
      <span className={`text-sm text-fuchsia-500 pt-6`}>Created by <span className={`font-bold`}>Qui Zap</span></span>
    </div>
  );
}

const Question = () => {
  return (
    <div className={`col-start-2 col-end-4 row-span-1 mb-8 text-center text-gray-700 w-full`}>Appropriately evisculate team building resources and backend synergy. </div>
  );
}

const QuestionImage = () => {
  return (
    <span className={`${styles.filter} col-span-full md:col-start-1 md:col-end-3 md:row-start-2 mb-6 md:mr-6 md:mb-0 justify-self-center md:justify-self-start`} >
      <img width={300} className={`${styles.shape}`} src={image} alt={``} />
    </span>
  );
}

const QuestionOptions = ({children}) => {
  return (
    <div className={` col-span-full md:col-start-3 md:col-end-5 md:row-start-2 text-base justify-self-center md:justify-self-end w-full`}>
      {children}
    </div>
  )
}

const Option = () => {
  return (
    <div className={`bg-white rounded-tr-lg rounded-bl-lg text-base text-gray-700 border-l-8 border-fuchsia-300 p-4 mb-4 w-auto min-w-full shadow hover:shadow-md cursor-pointer`}>elements</div>
  );
}

const Playground = () => {
  return (
    <div className={`space-y-4`}>
      <Board left={<QuizTitleDescription/>} right={<StartButton />} />
      <Quiz>
        <Question />
        <QuestionImage />
        <QuestionOptions>
          <Option />
          <Option />
          <Option />
          <Option />
        </QuestionOptions>
      </Quiz>
    </div>
  );
};

export default Playground;
