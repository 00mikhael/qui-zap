import React from "react";
import {Link} from 'react-router-dom'

import {FaQuestion} from 'react-icons/fa'

import styles from './QuizItem.module.css'

// import {getImageIfAny} from '../../utils/util'


const QuizItem = ({quiz, onAction, noFlex}) => {

  // const anyQuestionImage = getImageIfAny(quiz)
  const anyQuestionImage = ''

  return (
    <Link onClick={onAction} style={{flexBasis: "12.5rem", width: "12.5rem", height: "auto"}} className={`flex-grow ${noFlex && `sm:flex-none`} h-80 mb-4 sm:mb-0 bg-fuchsia-200 cursor-pointer shadow-md hover:shadow-md rounded-lg overflow-hidden flex justify-center relative`} to="/play">
      {
      (quiz.image_url || anyQuestionImage)
      ? <img width={256} className={`object-cover w-full h-full`} src={quiz.image_url || anyQuestionImage} alt={''} />
      : <span className={`h-80 w-full`}></span>
      }
      <span className={`bg-fuchsia-500 p-6 w-24 h-24 rounded-t-full rounded-bl-full flex justify-center items-center  shadow-md z-10 absolute ${styles.question_mark_opacity}`}>
        <FaQuestion className={`${styles.question_mark} text-fuchsia-800`} />
      </span>
      <div className={`${styles.item_bg} w-full h-full flex flex-col p-4 items-center justify-end absolute top-0 bottom-0`}>
          <span className={`text-xl text-center text-fuchsia-700 font-medium `}>{quiz.name}</span>
          <span className={`text-sm text-fuchsia-600 text-center font-light`}>{quiz.creator}</span>
      </div>
    </Link>
  );
};

export default QuizItem;
