import useSWR from 'swr';

const useQuizQuestions = (quiz_id) => {
    const { data, mutate } = useSWR('/api/quizQuestions?id=' + quiz_id);

    const { questions } = data;

    return {
        questions,
        mutate
    }
}

export default useQuizQuestions;
