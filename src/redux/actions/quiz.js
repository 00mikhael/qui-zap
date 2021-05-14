import {
    ADD_QUIZ,
    UPDATE_QUIZ,
    FETCH_QUIZ,
    DELETE_QUIZ
} from '../../constants/action-types'

const addQuiz = (quiz) => ({
    type: ADD_QUIZ, quiz
});

const fetchQuiz = (quiz) => ({
    type: FETCH_QUIZ, quiz
});

const updateQuiz = (quiz) => ({
    type: UPDATE_QUIZ, quiz
})

const deleteQuiz = (quiz) => ({
    type: DELETE_QUIZ, quiz
})
