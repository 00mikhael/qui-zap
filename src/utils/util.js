import {shuffle, sample} from 'lodash'

const randomItem = (list) => sample(list);

const shuffleList = (list) => shuffle(list);

const getImageIfAny = (quiz) => {
    const images = quiz.questionList.reduce((total, question) => {
        return total.concat(question.imageUrl);
    },[])
    for (let img of images) {
        if (img) {
        return img;
        }
    }
    return null;
    };

export {randomItem, shuffleList, getImageIfAny};
