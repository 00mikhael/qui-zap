import {StrictMode} from 'react';
import {render} from 'react-dom';

import './index.css';
import App from './components/App';

import image_url from './assets/img/de.jpg'
import image_url2 from './assets/img/pic.jpg'

const data = {
  quizList: [
    {
      id: 1,
      quizName: 'Author Quiz',
      quizDescription: 'Select a book written by the author',
      quizImageUrl: image_url,
      quizCreator: 'Jumina',
      quizQuestions: [
        {
          question: 'Select a book written by Mark Twain',
          questionImageUrl: image_url,
          questionAnswer: "world-cass experiences",
          questionOptions: [
            'The Adventres of Huckleberry Finn',
            'world-cass experiences',
            'maintain ore competencies',
            'efficient meta-ervices'
          ]
        },
        {
          question: 'Which of the following is the correct way to memoize a function',
          questionImageUrl: image_url2,
          questionAnswer: "efficient meta-service",
          questionOptions: [
            'The Adventres of Huckleberry Finn',
            'world-class experienes',
            'maintain core competecies',
            'efficient meta-service'
          ]
        }
      ]
    },
    {
      id: 2,
      quizName: 'Coder Block',
      quizDescription: 'Bunch of JS interview questionss',
      quizImageUrl: '',
      quizCreator: 'Codechef',
      quizQuestions: [
        {
          question: 'Which of the following is the correct way to memoize a function',
          questionImageUrl: '',
          questionAnswer: "maitain core multidisciplinary",
          questionOptions: [
            'The multidisciplinary of Huckleberry Finn',
            'multidisciplinary-class experiences',
            'maitain core multidisciplinary',
            'multidisciplinary meta-services'
          ]
        },
        {
          question: 'Select a book written by Mark Twain',
          questionImageUrl: '',
          questionAnswer: "The matrix of Huckleberry Finn",
          questionOptions: [
            'The matrix of Huckleberry Finn',
            'worl-class matrix',
            'maintain matrix cpetencies',
            'matrix meta-services'
          ]
        },
        {
          question: 'Rapidiously matrix magnetic ideas without intuitive',
          questionImageUrl: '',
          questionAnswer: "multidisciplinary mindshare",
          questionOptions: [
            'multidisciplinary mindshare',
            'whereas impactful',
            'Appropriately facilitate ',
            'matrix magnetic ideas '
          ]
        }
      ]
    },
    {
      id: 3,
      quizName: 'Coder Block',
      quizDescription: 'Bunch of JS interview questionss',
      quizImageUrl: '',
      quizCreator: 'Codechef',
      quizQuestions: [
        {
          question: 'Which of the following is the correct way to memoize a function',
          questionImageUrl: '',
          questionAnswer: "maitain core multidisciplinary",
          questionOptions: [
            'The multidisciplinary of Huckleberry Finn',
            'multidisciplinary-class experiences',
            'maitain core multidisciplinary',
            'multidisciplinary meta-services'
          ]
        },
        {
          question: 'Select a book written by Mark Twain',
          questionImageUrl: '',
          questionAnswer: "The matrix of Huckleberry Finn",
          questionOptions: [
            'The matrix of Huckleberry Finn',
            'worl-class matrix',
            'maintain matrix cpetencies',
            'matrix meta-services'
          ]
        },
        {
          question: 'Rapidiously matrix magnetic ideas without intuitive',
          questionImageUrl: '',
          questionAnswer: "multidisciplinary mindshare",
          questionOptions: [
            'multidisciplinary mindshare',
            'whereas impactful',
            'Appropriately facilitate ',
            'matrix magnetic ideas '
          ]
        }
      ]
    }
  ]
}
const state = {
  quizList: data.quizList
}

render(
  <StrictMode>
    <App quizList={state.quizList} />
  </StrictMode>,
  document.getElementById('root')
);
