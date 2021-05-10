import React from "react";

import {FaQuestion} from 'react-icons/fa'

import styles from './QuizItem.module.css'


const QuizItem = ({className, showName}) => {
  return (
    <div style={{flexBasis: "13rem"}} className={` flex-grow xl:flex-none w-full h-80 bg-fuchsia-200 cursor-pointer shadow hover:shadow-md rounded-md overflow-hidden mt-4 flex justify-center items-center relative ${className}`}>
      <span className={`bg-fuchsia-300 p-4 w-40 h-40 rounded-t-full rounded-bl-full flex justify-center items-center  shadow-md`}>
        <FaQuestion className={`${styles.question} text-fuchsia-800`} />
      </span>
      <div className={`${styles.bg} w-full h-full flex flex-col p-4 items-center absolute top-0 bottom-0`}>
        {showName && <>
          <span className={`text-3xl text-center text-fuchsia-700 font-extrabold`}>Author Quiz</span>
          <span className={`text-sm text-fuchsia-600 text-center`}>By Quizap</span>
        </>}
      </div>
    </div>
  );
};

export default QuizItem;
