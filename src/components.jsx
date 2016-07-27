import React from 'react';

import { connect } from 'react-redux';
import * as actions from './actions';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    if (this.props.state.highScore === true) {
      this.props.setTopScore(this.props.state.currentScore);
    }
  }

  render() {

    const state = this.props.state;

    let quizView = () => {
      if(state.quizFinished) {
        return (
          <QuizComplete finalMessage={state.finalMessage} finalScore={state.currentScore} retakeQuiz={this.props.retakeQuiz} fetchTopScore={this.props.fetchTopScore} scoreMessage={state.scoreMessage} />
        );
      } else {
        const currentQuestion = state.data.questions[state.currentQuestionIndex];
        return (
          <QuestionForm question={currentQuestion.question} answers={currentQuestion.answers} questionNumber={currentQuestion.index + 1} totalQuestions={state.data.questions.length} selectedAnswer={state.selectedAnswer} submitAnswer={this.props.submitAnswer} selectAnswer={this.props.selectAnswer}  />
        );
      }
    };

    return (
      <div className='quiz'>

        <section>
          <h1 className="quiz-title">{state.data.title}</h1>
        </section>

        {quizView()}

      </div>
    );
  }
};

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;
//                        <input type="radio" name="quiz-answers" value={index}/>

    return (
        <section className="quiz-answering-view">
          <h2 className="quiz-question">{props.question}</h2>
          <form className="quiz-answer-box">
            {
              props.answers.map((answer, index) => {
                const selected = index === props.selectedAnswer ? " selected" : "";
                return (
                  <label key={index}>
                    <div className={"quiz-answer" + selected} onClick={() => {props.selectAnswer(index)}}>{answer}</div>
                  </label>
                );
              })
            }
            <button className="quiz-submit" onClick={
                (event) => {
                  event.preventDefault();
                  if(props.selectedAnswer !== null) {
                    props.submitAnswer(props.selectedAnswer);
                  }
                }
              }>Submit Answer</button>
            <div className="quiz-question-counter">Question: {props.questionNumber}/{props.totalQuestions}</div>
          </form>
        </section>
    );
  }
}

class QuizComplete extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTopScore();
  }

  render() {

    const props = this.props;
    let topScoreArea;

    if (props.scoreMessage !== "" ) {
      topScoreArea = <h1 className="quiz-final-score">{props.scoreMessage}</h1>;
    } else {
      topScoreArea = <img src='loading.gif' width='40'></img>
    }
    return (
      <section className="quiz-complete-view">
        <div>
          <h1 className="quiz-final-message">{props.finalMessage}</h1>
          <h1 className="quiz-final-score">Final Score: {props.finalScore}</h1>
          {topScoreArea}
          <button className="quiz-new" onClick={props.retakeQuiz}>Retake Quiz</button>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectAnswer: (answerNumber) => {
      dispatch(actions.selectAnswer(answerNumber));
    },
    submitAnswer: (answerNumber) => {
      dispatch(actions.submitAnswer(answerNumber));
    },
    retakeQuiz: () => {
      dispatch(actions.retakeQuiz());
    },
    fetchTopScore: () => {
      dispatch(actions.fetchTopScore());
    },
    setTopScore: (score) => {
      dispatch(actions.setTopScore(score));
    }
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Quiz);

export default Container
