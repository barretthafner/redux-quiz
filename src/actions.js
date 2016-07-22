// action types
export const SELECT_ANSWER = 'SELECT_ANSWER';
export const SUBMIT_ANSWER = 'SUBMIT_ANSWER';
export const RETAKE_QUIZ = 'RETAKE_QUIZ';

// action creators
export const selectAnswer = (selectedAnswer) => {
  return {
    type: SELECT_ANSWER,
    selectedAnswer
  };
};

export const submitAnswer = (selectedAnswer) => {
  return {
    type: SUBMIT_ANSWER,
    selectedAnswer
  };
};

export const retakeQuiz = () => {
  return {
    type: RETAKE_QUIZ
  };
};
