import 'isomorphic-fetch';

// action types
export const SELECT_ANSWER = 'SELECT_ANSWER';
export const SUBMIT_ANSWER = 'SUBMIT_ANSWER';
export const RETAKE_QUIZ = 'RETAKE_QUIZ';
export const FETCH_TOPSCORE_SUCCESS = 'FETCH_TOPSCORE_SUCCESS';
export const FETCH_TOPSCORE_ERROR = 'FETCH_TOPSCORE_ERROR';
export const SET_TOPSCORE_SUCCESS = 'SET_TOPSCORE_SUCCESS';
export const SET_TOPSCORE_ERROR = 'SET_TOPSCORE_ERROR';

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

export const fetchTopScoreSuccess = (topScore) => {
  return {
    type: FETCH_TOPSCORE_SUCCESS,
    topScore
  };
};

export const fetchTopScoreError = (error) => {
  return {
    type: FETCH_TOPSCORE_ERROR,
    error
  };
};

export const setTopScoreSuccess = (topScore) => {
  return {
    type: SET_TOPSCORE_SUCCESS,
    topScore
  }
}

export const setTopScoreError = (error) => {
  return {
    type: SET_TOPSCORE_ERROR,
    error
  }
}

export const fetchTopScore = () => {
  return (dispatch) => {
    const url = '/api/topScore';
    return fetch(url)
      .then((res) => {
        if (res.state < 200 || res.status >= 300) {
          var error = new Error(res.statusText);
          error.res = res;
          throw error;
        }
        return res;
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return dispatch(
          fetchTopScoreSuccess(data.topScore)
        );
      })
      .catch((error) => {
        return dispatch(
          fetchTopScoreError(error)
        );
      });
  };
};

export const setTopScore = (score) => {
  return (dispatch) => {
    const url = '/api/topScore';
    return fetch(url, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          topScore: score
        })
      })
      .then((res) => {
        if (res.state < 200 || res.status >= 300) {
          var error = new Error(res.statusText);
          error.res = res;
          throw error;
        }
        return res;
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return dispatch(
          setTopScoreSuccess(data.topScore)
        );
      })
      .catch((error) => {
        return dispatch(
          setTopScoreError(error)
        );
      });
  }
}
