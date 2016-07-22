// action types
export const SELECT_ANSWER = 'SELECT_ANSWER';
export const SUBMIT_ANSWER = 'SUBMIT_ANSWER';
export const RETAKE_QUIZ = 'RETAKE_QUIZ';

// action creators
export const selectAnswer = (answerNumber) => {
  return {
    type: SELECT_ANSWER,
    answerNumber: answerNumber
  };
};

export const submitAnswer = (answerNumber) => {
  return {
    type: SUBMIT_ANSWER,
    answerNumber: answerNumber
  };
};

export const retakeQuiz = () => {
  return {
    type: RETAKE_QUIZ
  };
};
