import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import useSWR from 'swr'
import './index.css';
import App from './components/App';
import fetcher from './utils/fetcher'

const refresh = async () => {
  const data = await fetcher('/api/quizList')
  console.log('DATA FROM REFRESH', data)
}

function reducer(state = [], action) {

  switch (action.type) {
    case 'FETCH_ALL_QUIZ':
      return action.payload
    case 'REFRESH_QUIZ_LIST':
      // const list = Object.assign({}, state, {
      //   quizList: state.quizList.concat([action.payload])
      // })
      // return list;
      console.log('QUIZ CREATED, ABOUT TO REFRESH...')
      refresh()
      return state
    default:
      return state;
  }

}

let store = Redux.createStore(reducer)



const mapDispatchToProps = (dispatch, props) => {
  return {
    onFetchAll: (initialState) => {
      dispatch({type: 'FETCH_ALL_QUIZ', payload: initialState});
    }
  };
}


const AppWrapper = ReactRedux.connect(() => ({}), mapDispatchToProps) ((props) => {

  const {data, error} = useSWR('/api/quizList', fetcher)

  if (error) return <div>An error occurred...{ ` `+ error.message}</div>
  if (!data) return <div>Loading...</div>
  props.onFetchAll(data)

  return <App />
});



ReactDOM.render(
    <React.StrictMode>
      <ReactRedux.Provider store={store}>
        <AppWrapper />
      </ReactRedux.Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
