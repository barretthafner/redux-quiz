import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import quizReducer from './reducers';


const DEFAULT_INITIAL_STATE = {
  selectedAnswer: null,
  currentQuestionIndex: 0,
  quizFinished: false,
  currentScore: 0,
  finalMessage: "",
  topScore: null,
  scoreMessage: "",
  data: {
    title: "Default Title",
    questions: [
      {
        question: "Default Question",
        answers: [
          "Default 1",
          "Default 2",
          "Default 3",
          "Default 4"
        ],
        correctAnswer: 0
      }
    ]
  }
};


export default (DEFINED_INITIAL_STATE) => {
  const initialState = Object.assign({}, DEFAULT_INITIAL_STATE, DEFINED_INITIAL_STATE);
  return createStore(quizReducer, initialState, applyMiddleware(ReduxThunk));
}
