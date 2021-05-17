import useSWR from 'swr';

const useQuizList = () => {
    const { data, mutate } = useSWR('/api/quizList');
    const { quizList } = data;

    return {
        quizList,
        mutate
    }
}

export default useQuizList;
