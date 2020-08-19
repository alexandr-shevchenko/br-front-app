import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import AstrologersListContainer from './modules/astrologers/containers/AstrologersListContainer';
import * as serviceWorker from './serviceWorker';
import store from './modules/store';

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <AstrologersListContainer />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your astrologers to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
