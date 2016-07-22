import { createStore } from 'redux';
import quizReducer from './reducers';


const DEFAULT_INITIAL_STATE = {
  selectedAnswer: null,
  currentQuestionIndex: 0,
  quizFinished: false,
  currentScore: 0,
  finalMessage: "",
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
  return createStore(quizReducer, Object.assign({}, DEFAULT_INITIAL_STATE, DEFINED_INITIAL_STATE));
}
