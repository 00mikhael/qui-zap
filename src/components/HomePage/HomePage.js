import React, { useEffect } from "react";

import Loader from "react-loader-spinner";
import * as ReactRedux from 'react-redux'
import useSWR from 'swr'


import Board from '../Board'
import QuizList from '../QuizList'
import QuizItem from '../QuizItem'
import fetcher from '../../utils/fetcher'

const mapDispatchToProps = (dispatch, props) => {
  return {
    onFetchAll: (initialState) => {
      dispatch({type: 'FETCH_ALL_QUIZ', payload: initialState});
    }
  };
}

const mapStateToProps = (state) => {
  return {
    quizList: state.quizList
  };
}


const HomePage = ReactRedux.connect(mapStateToProps, mapDispatchToProps) (({className, quizList, onAction, onFetchAll}) => {

  const {data, error} = useSWR('/api/quizList', fetcher);

  useEffect(() => {
    if (data) {
      onFetchAll(data);
    }
  })

  return (
    <div className={className}>
      <Board left={<AppTitle/>} right={<AppDescription />} />
      <Loader className={`m-4 justify-center ${!(data || error) ? `flex` : `hidden`}`} color="#A300A3" type="ThreeDots" height={20} width={20} />
      {error && <div className={`text-fuchsia-600 text-center p-2`}>Something went wrong...</div>}
      <QuizList>
        {quizList && quizList.map(quizItem => (
          <QuizItem onAction={() => onAction(quizItem)} key={quizItem._id} showName={true} quiz={quizItem} noFlex={quizList.length < 5} />
        ))}
      </QuizList>
    </div>
  );
});

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
    <div className={`justify-self-end col-start-2 col-end-5  row-start-1 h-full p-4 rounded-md shadow-inner flex flex-col justify-end max-w-xl bg-blueGray-100 `}>
      {/* <span className={`text-fuchsia-700 text-lg font-sans font-light leading-7`}>{`State of the art quizing app, been referred to as the uber of quiz apps. Very easy to use just pick a quiz and answer the same questions over and over again. Currently working on securing our first round of funding as you read this.`}</span> */}
    </div>
  );
};

export default HomePage;
