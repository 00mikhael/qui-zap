import useSWR from 'swr';

const useQuizDetails = (id) => {
    const { data, mutate } = useSWR('/api/quiz?id=' + id);

    return {
        QuizDetails: data,
        mutate
    }
}

export default useQuizDetails;
