import useSWR from 'swr';

const useQuizList = () => {
    const { data, mutate } = useSWR('/api/quizList');
    const { quizList } = data;

    // const slice = quizList.slice(0,7)


    return {
        quizList,
        mutate
    }
}

export default useQuizList;
