import React from 'react';
import ReactDOM from 'react-dom';

import * as ReactRedux from 'react-redux'
import * as Redux from 'redux'
import { SWRConfig } from 'swr'

import './index.css';
import App from './components/App';
import fetcher from './utils/fetcher'


const reducer = (state = [], action) => {

  switch (action.type) {
    case 'FETCH_ALL_QUIZ':
      return action.payload
    default:
      return state;
  }

}

const store = Redux.createStore(reducer)

ReactDOM.render(
    <ReactRedux.Provider store={store}>
      <React.StrictMode>
        <SWRConfig value={{
          refreshInterval: 1000,
          fetcher: fetcher,
          suspense: true,
          onErrorRetry: (error, key, config, revalidate, {retryCount}) => {
            if (error.status === 404) return;
            if (retryCount >= 10) return;
            setTimeout(() => {revalidate({retryCount})}, 5000);
          } }}>
          <App />
        </SWRConfig>
      </React.StrictMode>
    </ReactRedux.Provider>,
    document.getElementById('root')
  );
