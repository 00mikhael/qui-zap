import React, {Suspense} from "react";

import { useHistory } from 'react-router-dom'

import Board from '../Board'
import QuizList from '../QuizList'
import QuizItem from '../QuizItem'

import useQuizList from '../../data/useQuizList'
import Loading from '../Loading'


const HomePage = () => {
  return (
    <div className={`flex-1`}>
      <Board left={<AppTitle/>} right={<AppDescription />} />
      <QuizList>
        <Suspense fallback={<Loading />}>
          <List />
        </Suspense>
      </QuizList>
    </div>
  );
};

const List = () => {
  const { quizList } = useQuizList();
  let history = useHistory();

  const list  = quizList.map((quizItem) => {
      return (
        <QuizItem onAction={() => {
          history.push(`/play/${quizItem._id}`)
        }} key={quizItem._id} showName={true} quiz={quizItem} />
      )
  });


  return (
      <>
        {list.reverse()}
      </>
  )
}

const AppTitle = () => {
  return (
    <span style={{writingMode: "vertical-rl", textOrientation: "upright"}} className={`welcome space-y-4 text-2xl sm:text-4xl font-extrabold  mx-1 col-start-1 col-end-2 justify-self-start h-full text-center`}>
      <span className={`border-2 rounded-bl-2xl rounded-t-2xl border-fuchsia-600 px-2 py-1 bg-fuchsia-700 text-white text-xl font-sans font-bold shadow-inner`}>QUI</span>
      <span className={`text-fuchsia-700`}>ZAP</span>
    </span>
  );
};

const AppDescription = () => {
  return (
    <></>
    // <div className={`justify-self-end col-start-2 col-end-5  row-start-1 h-full p-4 rounded-md shadow-inner flex flex-col justify-end max-w-xl bg-blueGray-100 `}>
    //   {/* <span className={`text-fuchsia-700 text-lg font-sans font-light leading-7`}>{`State of the art quizing app, been referred to as the uber of quiz apps. Very easy to use just pick a quiz and answer the same questions over and over again. Currently working on securing our first round of funding as you read this.`}</span> */}
    // </div>
  );
};

export default HomePage;
