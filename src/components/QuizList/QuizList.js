import React from "react";
import styles from './QuizList.module.css'


const QuizList = ({children}) => {
  return (
    <div>
      <span className={`${styles.list} flex flex-wrap gap-4 m-4 mb-0 justify-center`}>
      {children}
      </span>
    </div>
  );
};

export default QuizList;
