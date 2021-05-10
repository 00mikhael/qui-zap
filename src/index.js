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
          questionOptions: [
            'The Adventures of Huckleberry Finn',
            'world-class experiences',
            'maintain core competencies',
            'efficient meta-services'
          ]
        },
        {
          question: 'Which of the following is the correct way to memoize a function',
          questionImageUrl: image_url2,
          questionOptions: [
            'The Adventures of Huckleberry Finn',
            'world-class experiences',
            'maintain core competencies',
            'efficient meta-services'
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
          questionOptions: [
            'The Adventures of Huckleberry Finn',
            'world-class experiences',
            'maintain core competencies',
            'efficient meta-services'
          ]
        },
        {
          question: 'Select a book written by Mark Twain',
          questionImageUrl: '',
          questionOptions: [
            'The Adventures of Huckleberry Finn',
            'world-class experiences',
            'maintain core competencies',
            'efficient meta-services'
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
    <App allQuiz={state.quizList} />
  </StrictMode>,
  document.getElementById('root')
);
