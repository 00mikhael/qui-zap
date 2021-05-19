import useSWR from 'swr';

const useQuiz = (id) => {
    const { data, mutate } = useSWR('/api/quizList');
    const { quizList } = data;

    const quiz = quizList.find(q => {
        return q._id === id;
    })

    return {
        quiz,
        mutate
    }
}

export default useQuiz;
