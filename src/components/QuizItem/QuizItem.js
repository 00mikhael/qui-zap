import React from "react";
import {Link} from 'react-router-dom'

import { SimpleImg } from 'react-simple-img';
import {FaQuestion} from 'react-icons/fa'

import styles from './QuizItem.module.css'

// import {getImageIfAny} from '../../utils/util'


const QuizItem = ({quiz, onAction, noFlex}) => {

  // const anyQuestionImage = getImageIfAny(quiz)
  const anyQuestionImage = ''

  return (
    <Link onClick={onAction} style={{flexBasis: "18.5rem", width: "14.5rem", height: "400px"}} className={`${styles.item} flex-grow  h-80 m-2 sm:mb-0 bg-fuchsia-200 cursor-pointer shadow-md hover:shadow-md rounded-lg overflow-hidden flex justify-center relative`} to="/play">
      {
      (quiz.image_url || anyQuestionImage)
      ? <SimpleImg  height={400} imgStyle={{objectFit: "cover", objectPosition: "top", width: "100%", borderRadius: "8px", height: "100%"}} src={quiz.image_url || anyQuestionImage} alt={''} />
      : <span className={`h-80 w-full`}></span>
      }
      {/* {
      (quiz.image_url || anyQuestionImage)
      ? <img width={256} className={`object-cover object-top rounded-lg w-full h-full`} src={quiz.image_url || anyQuestionImage} alt={''} />
      : <span className={`h-80 w-full`}></span>
      } */}
      {!(quiz.image_url || anyQuestionImage) && <span className={`bg-fuchsia-500 p-6 w-24 h-24 rounded-t-full rounded-bl-full flex justify-center items-center  shadow-md z-10 absolute ${styles.question_mark_opacity}`}>
        <FaQuestion className={`${styles.question_mark} text-fuchsia-800`} />
      </span>}
      <div className={` w-full h-full flex flex-col justify-end absolute top-0 bottom-0 overflow-hidden`}>
          <div style={{minHeight: "100px"}} className={`w-full flex flex-col justify-between gap-4 rounded-b-md px-4 py-2 ${styles.item_bg}`}>
            <span className={`text-lg font-extrabold text-fuchsia-800 line-clamp-2`}>{quiz.name}</span>
            <span className={`text-xs sm:text-sm text-gray-600 `}>{quiz.creator}</span>
          </div>
      </div>
    </Link>
  );
};

export default QuizItem;
