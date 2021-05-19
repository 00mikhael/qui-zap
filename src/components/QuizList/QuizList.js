import React from "react";
import styles from './QuizList.module.css'


const QuizList = ({children}) => {
  return (
    <div>
      <span className={`${styles.list} max-w-6xl flex flex-wrap flex-row gap-4 p-4 mx-auto  justify-center items-center`}>
      {children}
      </span>
    </div>
  );
};

export default QuizList;
