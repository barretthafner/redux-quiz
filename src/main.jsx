import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <section>
          <h1 class="quiz-title">quiz-title</h1>
        </section>
        <section class="quiz-answering-view">
          <h2 class="quiz-question">quiz-question</h2>
          <form class="quiz-answer-box">
            <label>
              <input type="radio" name="quiz-answers" value="0"/>
              <div class="quiz-answer" data-answer="0"></div>
            </label>
            <label>
              <input type="radio" name="quiz-answers" value="1"/>
              <div class="quiz-answer" data-answer="1"></div>
            </label>
            <label>
              <input type="radio" name="quiz-answers" value="2"/>
              <div class="quiz-answer" data-answer="2"></div>
            </label>
            <label>
              <input type="radio" name="quiz-answers" value="3"/>
              <div class="quiz-answer" data-answer="3"></div>
            </label>
            <button class="quiz-submit">Submit Answer</button>
            <div class="quiz-question-counter"></div>
          </form>
        </section>
        <section class="quiz-complete-view">
          <div>
            <h1 class="quiz-final-message"></h1>
            <h1 class="quiz-final-score">Test</h1>
            <button class="quiz-new">Retake Quiz</button>
          </div>
        </section>
      </div>
    );
  }
};


ReactDOM.render(<Main />, document.getElementById('container'));
