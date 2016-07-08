import React, { Component, PropTypes } from 'react';
import Categories from './Categories';
import Entry from './Entry';
import Results from './Results';
import Leaderboard from './Leaderboard';

const categories = [
  {
    id: 1,
    name: 'Nutrition',
    description: 'See how much you know about the foods necessary for health and growth.',
    img: 'http://wholeplantfoods.info/wp-content/uploads/2015/01/heart.png'
  },
  {
    id: 2,
    name: 'Fitness',
    description: 'How much do you know about being physically fit and healthy?',
    img: 'https://lh3.ggpht.com/DOaemztdSlf8OD6PqWKo3ooF9qYCHZQVgrRvJnvZqWOb5NUnyqc1VmC0hxMYPu2BWjk=w170'
  }
];

class Trivia extends Component {
  constructor(props) {
    super(props);

    this.props.fetchLeaderboardRanks();
    this.handleQuizSelection = this.handleQuizSelection.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.next = this.next.bind(this);
    this.questions = [{ options: [], category: '' }];
    this.entry = {};
    this.score = 0;
    this.leaderboard = [];
  }

  componentWillReceiveProps(nextProps) {
    this.questions = nextProps.questions;
    this.entry = nextProps.question;
    this.score = nextProps.score;
    this.quizStatus = nextProps.quizStatus;
    this.index = nextProps.index;
    this.leaderboard = nextProps.leaderboard;
    this.questionStatus = nextProps.questionStatus;
  }

  handleQuizSelection(category) {
    const { fetchQuizQuestions } = this.props;
    fetchQuizQuestions(category);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { selectedOption, updateScore, score, updateQuestionStatus } = this.props;

    if (selectedOption === this.entry.answer) {
      this.score++;
      updateScore(this.score);
      updateQuestionStatus('Correct');
    } else {
      this.score--;
      updateScore(this.score);
      updateQuestionStatus('Incorrect');
    }
  }

  handleSelection(event) {
    const { selectOption } = this.props;
    selectOption(event.target.value);
  }

  // next question
  next() {
    const { receiveCurrentQuestion, updateQuizStatus, updateUserPoints, updateIndex } = this.props;
    this.index += 1;
    const nextQuestion = this.questions[this.index];
    if (nextQuestion) {
      updateIndex(this.index);
      receiveCurrentQuestion(nextQuestion);
    } else {
      updateQuizStatus('finished');
      updateUserPoints(this.score);
    }
  }

  render() {
    return (
      <div className="main-container">
        <div className="row">
          <div className="col-sm-8">
            <Categories 
              handleQuizSelection={this.handleQuizSelection}
              categories={categories}
            />
            <Entry 
              entry={this.entry}
              handleSelection={this.handleSelection}
              handleSubmit={this.handleSubmit} 
              next={this.next}
              quizStatus={this.quizStatus}
              score={this.score}
            />
          </div>
          <div className="col-sm-4">
            <Leaderboard leaderboard={this.leaderboard} />
            <Results score={this.score} questionStatus={this.questionStatus} />
          </div>
        </div>
      </div>
    );
  }
}

Trivia.propTypes = {
  fetchQuizQuestions: PropTypes.func,
  questions: PropTypes.array,
  question: PropTypes.object,
  receiveCurrentQuestion: PropTypes.func,
  selectOption: PropTypes.func,
  selectedOption: PropTypes.oneOfType([       
    PropTypes.string,
    PropTypes.number 
  ]),
  score: PropTypes.number,
  updateScore: PropTypes.func,
  updateQuizStatus: PropTypes.func,
  quizStatus: PropTypes.string,
  updateUserPoints: PropTypes.func,
  updateIndex: PropTypes.func,
  index: PropTypes.number,
  fetchLeaderboardRanks: PropTypes.func,
  leaderboard: PropTypes.array,
  updateQuestionStatus: PropTypes.func,
  questionStatus: PropTypes.string
};

export default Trivia;
