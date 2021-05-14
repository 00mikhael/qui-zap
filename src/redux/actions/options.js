import {
    ADD_OPTIONS,
    UPDATE_OPTIONS,
    FETCH_OPTIONS,
    DELETE_OPTIONS
} from '../../constants/action-types'

const addOptions = (options, quiz) => ({
    type: ADD_OPTIONS, options, quiz
});

const fetchOptions = (options, quiz) => ({
    type: FETCH_OPTIONS, options, quiz
});

const updateOptions = (options, quiz) => ({
    type: UPDATE_OPTIONS, options, quiz
})

const deleteOptions = (options, quiz) => ({
    type: DELETE_OPTIONS, options, quiz
})
