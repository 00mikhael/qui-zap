import React from "react";

import {FaQuestion} from 'react-icons/fa'

import styles from './QuizItem.module.css'


const QuizItem = ({quiz}) => {

  const getImageIfAny = () => {
    const images = quiz.quizQuestions.reduce((total, question) => {
      return total.concat(question.questionImageUrl);
    },[])
    for (let img of images) {
      if (img) {
        return img;
      }
    }
    return null;
  }

  return (
    <div style={{flexBasis: "13rem", width: "16rem", height: "auto"}} className={`flex-grow h-80 xl:flex-none bg-fuchsia-200 cursor-pointer shadow-md hover:shadow-md rounded-md overflow-hidden mt-4 flex justify-center relative`}>
      {
      (quiz.quizImageUrl || getImageIfAny())
      ? <img width={256} className={`h-full w-full bg-cover bg-top`} src={quiz.quizImageUrl || getImageIfAny()} alt={`question`} />
      : <span className={`h-80 w-full`}></span>
      }
      <span className={`bg-fuchsia-500 p-6 w-24 h-24 rounded-t-full rounded-bl-full flex justify-center items-center  shadow-md z-10 absolute ${styles.question_mark_opacity}`}>
        <FaQuestion className={`${styles.question_mark} text-fuchsia-800`} />
      </span>
      <div className={`${styles.item_bg} w-full h-full flex flex-col p-4 items-center justify-end absolute top-0 bottom-0`}>
          <span className={`text-xl text-center text-fuchsia-700 font-medium `}>{quiz.quizName}</span>
          <span className={`text-sm text-fuchsia-600 text-center font-light`}>{quiz.quizCreator}</span>
      </div>
    </div>
  );
};

export default QuizItem;
