import {
    ADD_QUESTIONS,
    UPDATE_QUESTIONS,
    FETCH_QUESTIONS,
    DELETE_QUESTIONS
} from '../../constants/action-types'

const addQuestions = (questions, quiz) => ({
    type: ADD_QUESTIONS, questions, quiz
});

const fetchQuestions = (questions, quiz) => ({
    type: FETCH_QUESTIONS, questions, quiz
});

const updateQuestions = (questions, quiz) => ({
    type: UPDATE_QUESTIONS, questions, quiz
})

const deleteQuestions = (questions, quiz) => ({
    type: DELETE_QUESTIONS, questions, quiz
})
