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
        finalMessage: "",
        topScore: null,
        scoreMessage: "",
        highScore: false
      });

    case actions.FETCH_TOPSCORE_SUCCESS:

      let scoreMessage;
      let highScore = false;
      if(action.topScore > state.currentScore) {
        scoreMessage = 'Try again! Top score is: ' + action.topScore;
      } else if (action.topScore === state.currentScore) {
        scoreMessage = 'You tied for top score with: ' + state.currentScore;
      } else {
        scoreMessage = 'You set a new high score with: ' + state.currentScore;
        highScore = true;
      }
      // bug: if retake quiz is called before api call comes back no new high score will be set on the api
      if (state.quizFinished) {
        return Object.assign({}, state, {
          scoreMessage,
          highScore
        });
      }
      break;

    case actions.FETCH_TOPSCORE_ERROR:
      console.log(action.error);
      return Object.assign({}, state, {
        topScore: 'N/A'
      });

    case actions.SET_TOPSCORE_SUCCESS:
      console.log(action.topScore);
      return state;

    case actions.SET_TOPSCORE_ERROR:
      console.log(action.error);
      return state;

    default:
      return state;
  }
}

export default quizReducer;
