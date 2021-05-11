import {StrictMode} from 'react';
import {render} from 'react-dom';

import './index.css';
import App from './components/App';

import image_url from './assets/img/de.jpg'
// import image_url2 from './assets/img/pic.jpg'

const data = {
  quizList: [
    {
      id: 1,
      name: 'Coding Quiz',
      description: 'A collection of javascript interview questions',
      imageUrl: image_url,
      creator: 'Quizap',
      questionList: [
        {
          id: 1,
          quizId: 1,
          question: 'Select a book written by Mark Twain',
          imageUrl: '',
          answer: "world-cass experiences",
          options: [
            {
              id: 1,
              questionId: 1,
              value: 'The Adventres of Huckleberry Finn'
            },
            {
              id: 2,
              questionId: 1,
              value: 'world-cass experiences'
            },
            {
              id: 3,
              questionId: 1,
              value: 'maintain ore competencies'
            },
            {
              id: 4,
              questionId: 1,
              value: 'efficient meta-ervices'
            }
          ]
        },
        {
          id: 2,
          quizId: 1,
          question: 'Select a book written by Harry jane',
          imageUrl: '',
          answer: "The Adventres of Huckleberry Finn",
          options: [
            {
              id: 5,
              questionId: 2,
              value: 'The Adventres of Huckleberry Finn'
            },
            {
              id: 6,
              questionId: 2,
              value: 'world-cass experiences'
            },
            {
              id: 7,
              questionId: 2,
              value: 'maintain ore competencies'
            },
            {
              id: 8,
              questionId: 2,
              value: 'efficient meta-ervices'
            }
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
