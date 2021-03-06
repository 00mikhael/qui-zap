import React from "react";

import {FaQuestion} from 'react-icons/fa'

import styles from './QuestionImage.module.css'

const QuestionImage = ({questionImage, quizImage}) => {
  return (
    <span className={`${styles.filter}  col-span-full md:col-start-1 md:col-end-2 md:row-start-2 mb-6 md:mr-6 md:mb-0 justify-self-start`} >
      <div style={{flexBasis: "18.5rem", height: "400px", maxWidth: "512px"}}  className={`flex-grow xl:flex-none overflow-hidden mt-4 flex justify-center relative`}>
        {
        (questionImage || quizImage)
        ? <img style={{objectFit: "cover", objectPosition: "center", width: "100%", borderRadius: "8px"}}  className={`h-full w-full bg-cover bg-top`} src={questionImage || quizImage} alt={`question`} />
        : <span className={`h-80 w-full`}></span>
        }
        <span className={`bg-fuchsia-500 p-6 w-24 h-24 rounded-t-full rounded-bl-full flex justify-center items-center  shadow-md z-10 absolute ${styles.question_mark_opacity}`}>
          <FaQuestion className={`${styles.question_mark} text-fuchsia-800`} />
        </span>
      </div>
    </span>
  );
};

export default QuestionImage;
