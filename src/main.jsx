import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import createQuizStore from './store';
import quizSeed from './quizSeed';

import Quiz from './quiz';

const store = createQuizStore({ data: quizSeed });

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Provider store={store}>
      <Quiz />
    </Provider>,
    document.getElementById('container')
  );
});
