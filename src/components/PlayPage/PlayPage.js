import React, {Suspense} from "react";
//, {useState, useEffect}

import { useParams, Link } from 'react-router-dom'

import useQuiz from '../../data/useQuiz'
import useQuizDetails from '../../data/useQuizQuestions'
import Board from '../Board'
import Quiz from '../Quiz'
import Question from '../Question'
import Loading from '../Loading'


const PlayPage = () => {

  const {id} = useParams()


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
    <>
      <Suspense fallback={<Loading />}>
        <Top id={id} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Playground id={id} />
      </Suspense>
    </>
  );
};

const Top = ({id}) => {
  const {quiz} = useQuiz(id);

  return (
    <Board left={<QuizTitleDescription title={quiz.name} description={quiz.description} creator={quiz.creator}
      />} right={<StartButton />} />
  )
}

const Playground = ({id}) => {
  const {quiz} = useQuiz(id);
  const { questions } = useQuizDetails(id)

  if (!questions.length > 0) {
    return (
      <div className={`text-center p-8 text-gray-500 font-mono max-w-6xl mx-auto`}>Feature to add questions to a quiz will be available soon... Checkout <Link className={`underline text-fuchsia-500`} to="/play/609d62fa1610d7f5150d8013">this quiz</Link> to see what it looks like.</div>
    )
  }

  return (
        <Quiz>
          {/* <Question selectedOption={selected} answerStatus={answerStatus} onAnswerSelected={handleAnswerSelected} quizImage={quiz.imageUrl} question={question} /> */}
          <Question quizImage={quiz.image_url} question={questions[0]} />
        </Quiz>
  )
}

const StartButton = () => {
  return (
    <button className={`justify-self-end col-start-3 row-start-1 m-6 rounded max-w-min px-6 py-2 cursor-pointer border border-fuchsia-600 text-fuchsia-600 hover:bg-fuchsia-600 hover:text-white font-medium`}>Start</button>
  );
}


const QuizTitleDescription = ({title, description, creator}) => {

  return (
    <div className={`flex flex-col space-y-2 justify-self-start col-span-full row-start-4 mb-24 mx-6`}>
      <span className={`font-extrabold text-3xl text-fuchsia-700`}>{title}</span>
      <span className={`font-normal text-base text-fuchsia-600 break-all prose prose-sm`}>{description}</span>
      <span className={`font-bold text-fuchsia-600 text-sm text-fuchsia-600 pt-6 items-end`}>{creator}</span>
    </div>
  );
}

export default PlayPage;
