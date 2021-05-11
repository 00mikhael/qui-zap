import {shuffle, sample} from 'lodash'

const randomItem = (list) => sample(list);

const shuffleList = (list) => shuffle(list);

const getImageIfAny = (quiz) => {
    const images = quiz.quizQuestions.reduce((total, question) => {
        return total.concat(question.questionImageUrl);
    },[])
    for (let img of images) {
        if (img) {
        return img;
        }
    }
    return null;
    };

export {randomItem, shuffleList, getImageIfAny};
