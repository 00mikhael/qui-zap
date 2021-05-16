import React from "react";
//, {useState, useEffect}

import Board from '../Board'
// import Quiz from '../Quiz'
// import Question from '../Question'

// import {randomItem} from '../../utils/util'


const PlayPage = ({quiz}) => {

  // const [question, setQuestion] = useState(randomItem(quiz.questionList));
  // const [selected, setSelected] = useState();
  // const [answerStatus, setAnswerStatus] = useState();

  // const handleAnswerSelected = (question, selected) => {
  //   if (question.answer === selected.value) {
  //     setAnswerStatus('correct')
  //   } else if (question.questionAnswer !== selected.value) {
  //     setAnswerStatus('wrong')
  //   }
  //   setSelected(selected);
  // }

  // useEffect(() => {
  //   let timer;

  //   if (timer) {
  //     clearTimeout(timer)
  //   }

  //   if (answerStatus === 'correct') {
  //     timer = setTimeout(() => {
  //       setQuestion(randomItem(quiz.questionList));
  //       setAnswerStatus('not answered')
  //     }, 1000);
  //   } else {
  //     timer = setTimeout(() => {
  //       setAnswerStatus('not answered')
  //     }, 500);
  //   }

  //   return () => clearTimeout(timer)

  //   //eslint-disable-next-line
  // },[selected])


  return (
    <div className={``}>
      <Board className={`h-64`} left={<QuizTitleDescription title={quiz.name} description={quiz.description} creator={quiz.creator}
      />} right={<StartButton />} />
      {/* <Quiz>
        <Question selectedOption={selected} answerStatus={answerStatus} onAnswerSelected={handleAnswerSelected} quizImage={quiz.imageUrl} question={question} />
      </Quiz> */}
    </div>
  );
};

const StartButton = () => {
  return (
    <button className={`justify-self-end col-start-4 sm:col-start-3  border border-fuchsia-600 rounded text-fuchsia-600 max-w-min px-6 py-2 cursor-pointer hover:bg-fuchsia-700 hover:text-fuchsia-50 font-semibold`}>Start</button>
  );
}

const QuizTitleDescription = ({title, description, creator}) => {
  return (
    <div className={`flex flex-col space-y-2 col-start-2 col-end-5 sm:col-start-2 sm:col-end-3 row-start-4`}>
      <span className={`font-extrabold text-3xl text-fuchsia-700`}>{title}</span>
      <span className={`font-normal text-base text-fuchsia-600`}>{description}</span>
      <span className={`font-bold text-fuchsia-600 text-sm text-fuchsia-600 pt-6 items-end`}>{creator}</span>
    </div>
  );
}

export default PlayPage;
