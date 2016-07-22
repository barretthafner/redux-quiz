import { combineReducers } from 'redux';
import * as actions from './actions';

function quizReducer(state, action) {

  switch (action.type) {

    case actions.SELECT_ANSWER:
      return Object.assign({}, state, {
        selectedAnswer: action.selectedAnswer
      });

    case actions.SUBMIT_ANSWER:
      // get current question
      const currentQuestion = state.data.questions[state.currentQuestionIndex];
      // check if answer is correct
      const correct = action.selectedAnswer === currentQuestion.correctAnswer;
      // make new state object
      let newState = Object.assign({}, state, {
        currentScore: correct ? state.currentScore + 1 : state.currentScore,
        selectedAnswer: null
      });
      // if last question end quiz
      if ( state.currentQuestionIndex === state.data.questions.length - 1 ) {
        newState.quizFinished = true;
        newState.finalMessage = state.data.finalMessages[newState.currentScore];
      }
      // else increment currentQuestionIndex
      else {
          newState.currentQuestionIndex = state.currentQuestionIndex + 1;
      }
      return newState;

    case actions.RETAKE_QUIZ:
      return Object.assign({}, state, {
        currentQuestionIndex: 0,
        quizFinished: false,
        selectedAnswer: null,
        currentScore: 0,
        finalMessage: ""
      });

    default:
      return state;
  }
}

export default quizReducer;
