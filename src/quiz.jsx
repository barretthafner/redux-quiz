import React from 'react';

import { connect } from 'react-redux';
import actions from './actions';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    console.log(this);

    const state = this.props.state;
    const currentQuestion = state.data.questions[state.currentQuestionIndex];

    console.log(state);

    let quizView = () => {
      if(state.quizFinished) {
        return (
          <QuizComplete finalMessage={state.finalMessage} finalScore={state.currentScore} />
        );
      } else {
        return (
          <QuestionForm question={currentQuestion.question} answers={currentQuestion.answers} questionNumber={currentQuestion.index + 1} totalQuestions={state.data.questions.length} />
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

    return (
        <section className="quiz-answering-view">
          <h2 className="quiz-question">{props.question}</h2>
          <form className="quiz-answer-box">
            {
              props.answers.map((answer, index) => {
                return (
                  <label key={index}>
                    <input type="radio" name="quiz-answers" value={index}/>
                    <div className="quiz-answer">{answer}</div>
                  </label>
                );
              })
            }
            <button className="quiz-submit">Submit Answer</button>
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
  render() {
    const props = this.props;
    return (
      <section className="quiz-complete-view">
        <div>
          <h1 className="quiz-final-message">{props.finalMessage}</h1>
          <h1 className="quiz-final-score">{props.finalScore}</h1>
          <button className="quiz-new">Retake Quiz</button>
        </div>
      </section>
    );
  }
}

var mapStateToProps = function(state, props) {
  return {
    state: state
  };
};



const Container = connect(mapStateToProps)(Quiz);

export default Container
